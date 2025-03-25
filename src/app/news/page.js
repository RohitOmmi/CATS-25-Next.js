import { getAllNews } from "@/lib/getAllNews";
import Header from "@/components/common/Header";
import Tab from "@/components/common/tab";
import { getAllNewsCategories } from "@/lib/getAllNewsCategories";
import NewsSection from "@/components/NewsSection";

export default async function NewsPage() {
  const allNews = await getAllNews();
  const newsCategories = await getAllNewsCategories();

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        
        <Tab service={newsCategories} />
        <div className="grid md:grid-cols-2">
        <NewsSection allNews={allNews} />
        </div>
      </div>
    </>
  );
}
