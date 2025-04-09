"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import PaginationComponent from "@/components/PaginationComponent";
import { ChevronRight } from "lucide-react";

const NEWS_PER_PAGE = 3;
const slugify = (str) =>
  str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')

const deslugify = (slug) =>
  slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

export default function NewsTabs({ allNews, newsCategories }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
 
 


  const [activeTab, setActiveTab] = useState(
    searchParams.get("category") || "All News"
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || "All News";
    const pageFromUrl = Number(searchParams.get("page")) || 1;
    setActiveTab(categoryFromUrl);
    setCurrentPage(pageFromUrl);
  }, [searchParams]);

  // ✅ Filter news based on selected category
  const filteredNews =
    activeTab === "All News"
      ? allNews
      : allNews.filter(
          (news) =>
            news.l1_catname?.trim().toLowerCase() ===
            activeTab.trim().toLowerCase()
        );

  const totalPages = Math.ceil(filteredNews.length / NEWS_PER_PAGE);

  // ✅ Slice paginated news
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * NEWS_PER_PAGE,
    currentPage * NEWS_PER_PAGE
  );

  // ✅ Handle tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1);
    const params = new URLSearchParams();
    params.set("category", tabName);
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString()}`);
  };

  // ✅ Handle pagination change
  const handlePagination = (page) => {
    setCurrentPage(page);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    params.set("category", activeTab);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="flex flex-row h-full"
      >
        {/* ✅ Tab List */}
        <TabsList className="shrink-0 overflow-x-auto gap-2 scrollbar-hide">
          <TabsTrigger value="All News" className="font-bold whitespace-nowrap">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-inter">All News</h1>
              <ChevronRight className="w-3 h-3 text-black ml-1" />
            </div>
          </TabsTrigger>
          {newsCategories.map((category, index) => (
            <TabsTrigger
              key={index}
              value={category.main_category_name}
              className="font-bold whitespace-nowrap"

            >
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-inter">
                  {category.main_category_name}
                </h1>
                <ChevronRight className="w-3 h-3 text-black ml-1" />
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* ✅ Tab Content */}
        <div className="h-[calc(100vh-300px)] overflow-y-auto overflow-x-hidden w-full">
          <TabsContent value={activeTab} className="w-full">
            {paginatedNews.length === 0 ? (
              <p className="text-center text-gray-500">No news available.</p>
            ) : (
              paginatedNews.map((newsItem, index) => {
                const words = newsItem.full_description.split(" ");
                const shortText = words.slice(0, 20).join(" ");
                const isLong = words.length > 100;
                const l1_Slug = newsItem?.l1_catname.toLowerCase().replace(" ","-")
                const path = `${l1_Slug}/${newsItem?.slug}`
               
                return (
                  <div
                    key={index}
                    className="w-full border border-gray-400 shadow-sm p-4 my-2"
                    onClick={() => router.push(`/news-panel/${path}`)}
                    
                  >
                    <div className="flex justify-between mx-2">
                      <div className="bg-[#f4e4c9] rounded-md px-1 font-inter">
                        <small>{newsItem.l2_catname}</small>
                      </div>
                      <div className="bg-[#f4e4c9] rounded-md px-1 font-inter">
                        <small>{newsItem.news_date}</small>
                      </div>
                    </div>
                    <h2 className="text-xl font-medium text-[#a58255] font-inter">
                      {newsItem.news_title}
                    </h2>
                    <p
                      className="text-[18px] text-black font-inter"
                      dangerouslySetInnerHTML={{
                        __html: isLong
                          ? shortText + "..."
                          : newsItem.full_description,
                      }}
                    />
                    {isLong && (
                      <a href="#" className="text-gray-500 mt-2 block font-inter">
                        <h3>Read More →</h3>
                      </a>
                    )}
                  </div>
                );
              })
            )}
          </TabsContent>
        </div>
      </Tabs>

      {/* ✅ Pagination Below Tabs */}
      <div className="py-4">
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePagination}
        />
      </div>
    </div>
  );
}


