import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllNews } from "@/lib/getAllNews";
import { getDetailedNews } from "@/lib/getDetailedNews";
import { getNewsByCategory } from "@/lib/getNewsByCategory";
import { ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";


async function innerSlug({ params }) {
  const { slug, innerSlug } = await Promise.resolve(params);
  const newsDetails = await getDetailedNews(innerSlug);

  const allNews = await getAllNews();
  const newsByCategory = await getNewsByCategory(slug);

  if (!newsDetails) return <div>Detailed News not found</div>;
  // console.log(allNews);
  // console.log(newsByCategory);

  const moduleName = [...allNews, ...newsByCategory].filter(
    (each) => each.news_title === newsDetails.news_title
  );

  
  console.log(
    moduleName[0]?.l2_name || moduleName[0]?.l2_catname,
    "moduleName"
  );
  function toCapitalizeWords(str) {
    return str
      .split("-") // replace '-' with spaces later
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
  const Slug = toCapitalizeWords(slug);
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <div className="w-full bg-[#f4e4c9] py-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-[#a58255]">News</h1>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="font-inter">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/news" className="font-inter">
                    News
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/news" className="font-inter">
                    {Slug}
                  </BreadcrumbLink>
                </BreadcrumbItem><BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/news" className="font-inter text-[#007367]">
                  {moduleName[0]?.l2_name || moduleName[0]?.l2_catname}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto p-4 ">
          <Tabs  className="flex flex-row h-full">
            <TabsList>
              <TabsTrigger className="data-[state=active]:text-white text-black">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-inter">
                    {moduleName[0]?.l2_name || moduleName[0]?.l2_catname}
                  </h2>
                  <ChevronRight className="w-3 h-3 ml-1 transition-colors duration-200 data-[state=active]:text-white text-black" />
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent >
              <div className="w-full">
                <h1 className="text-[#a58255] text-[22px]  font-inter mb-4">{newsDetails.news_title}</h1>
                <div className="font-inter news-inner"
                  dangerouslySetInnerHTML={{
                    __html: newsDetails.full_description,
                  }}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <section>
          <Footer />
        </section>
      </section>
    </>
  );
}

export default innerSlug;
