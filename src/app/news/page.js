import { getAllNews } from "@/lib/getAllNews";
import Header from "@/components/common/Header";
import Tab from "@/components/common/tab";
import { getAllNewsCategories } from "@/lib/getAllNewsCategories";
import NewsSection from "@/components/NewsSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import Footer from "@/components/common/Footer";
export default async function NewsPage() {
  const allNews = await getAllNews();
  const newsCategories = await getAllNewsCategories();

  return (
    <div >
      <Header />
      <div>
        <div className="bg-[#f4e4c9] w-full py-4 ">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-[#a58255] ">News</h1>
            <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/news">News</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-screen-xl  flex flex-row mx-auto">
        <div className="w-full flex flex-col">
          <Tab service={newsCategories} />
        </div>
        <div className="">
          <NewsSection allNews={allNews} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
