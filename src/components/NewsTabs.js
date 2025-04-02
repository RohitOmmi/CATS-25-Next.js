"use client"; // ✅ Ensures this runs only on the client

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname  } from "next/navigation";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import PaginationComponent from "@/components/PaginationComponent";
import { ChevronRight } from "lucide-react";

const NEWS_PER_PAGE = 3;

export default function NewsTabs({ allNews, newsCategories }) {
 
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname()

  const [activeTab, setActiveTab] = useState(
    searchParams.get("category") || "All News"
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

//   const [activeTab, setActiveTab] = useState("All News"); // ✅ Tracks selected tab
//   const [currentPage, setCurrentPage] = useState( 1);


//   useEffect(() => {
//     const pageFromUrl = Number(searchParams.get("page")) || 1;
//     setCurrentPage(pageFromUrl);
//   }, [searchParams]);

useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || "All News";
    const pageFromUrl = Number(searchParams.get("page")) || 1;
    setActiveTab(categoryFromUrl);
    setCurrentPage(pageFromUrl);
  }, [searchParams]);

  const filteredNews =
    activeTab === "All News"
      ? allNews
      : allNews.filter((news) => news.l1_catname === activeTab);

  const totalPages = Math.ceil(filteredNews.length / NEWS_PER_PAGE);

  // Paginate the filtered news
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * NEWS_PER_PAGE,
    currentPage * NEWS_PER_PAGE
  );
 const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1); // ✅ Reset to first page when tab changes
    // const params = new URLSearchParams(searchParams.toString());
    const params = new URLSearchParams();
    params.set("category", tabName);
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString()}`); // ✅ Update URL
  };

  // ✅ Handle Pagination: Update URL and State
  const handlePagination = (page) => {
    setCurrentPage(page);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    params.set("category", activeTab);
    router.replace(`${pathname}?${params.toString()}`); // ✅ Update URL
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Tabs
          value={activeTab}
          onValueChange={handleTabChange} 
        className="flex flex-row h-full"
        
      >
        {/* ✅ Tab List */}
        <TabsList className="shrink-0">
          <TabsTrigger value="All News" className="font-bold w-full">
          <div className="flex flex-row items-center justify-between" >
            <h1 className=" text-xl font-inter">All News</h1>
            <ChevronRight className="w-3 h-3 text-black" />
            </div>
          </TabsTrigger>
          {newsCategories.map((category, index) => (
            <TabsTrigger
              key={index}
              value={category.main_category_name}
              className="font-bold w-full"
            >
              <div className="flex flex-row items-center justify-between" >
              <h1 className="text-xl  text-left font-inter">{category.main_category_name}</h1>
              <ChevronRight className="w-3 h-3 text-black" />
              </div>
             
            </TabsTrigger>
          ))}
        </TabsList>

        {/* ✅ Tab Content */}
        <div className="h-[calc(100vh-300px)] overflow-y-auto overflow-x-hidden">
          <TabsContent value={activeTab} className="w-full">
          {paginatedNews.length === 0 ? (
              <p className="text-center text-gray-500">No news available.</p>
            ) : (
            paginatedNews.map((newsItem, index) => {
              const words = newsItem.full_description.split(" ");
              const shortText = words.slice(0, 20).join(" ");
              const isLong = words.length > 100;

              return (
                <div key={index} className="w-full border border-gray-400 shadow-sm p-4 my-2">
                  <div className="flex flex-row items-center justify-between mx-2">
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
                      __html: isLong ? shortText : newsItem.full_description,
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

        {/* ✅ Pagination Below Tabs */}
        
      </Tabs>
      <div className="shrink-0 py-4">
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePagination}
          />
        </div>
    </div>
  );
}
