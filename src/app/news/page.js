import { getAllNews } from "@/lib/getAllNews";
import { getAllNewsCategories } from "@/lib/getAllNewsCategories";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import NewsTabs from "@/components/NewsTabs"; // ✅ Import Client Component


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export default async function NewsPage() {
  const allNews = await getAllNews();
  const newsCategories = await getAllNewsCategories();

  return (
    <div>
      <section>
        <Header />
      </section>

      <section>
        {/* Breadcrumb */}
        <div className="w-full bg-[#f4e4c9] py-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-[#a58255]">News</h1>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="font-inter">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/news" className="font-inter">News</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

      <section>
        <div className="h-screen overflow-hidden flex flex-col">
          {/* ✅ Client Component for Tabs & Pagination */}
          <div className="max-w-screen-xl mx-auto p-4 ">
            <NewsTabs allNews={allNews} newsCategories={newsCategories} />
           
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}


