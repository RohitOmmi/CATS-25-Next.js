import { getAllNews } from "@/lib/getAllNews";
import Header from "@/components/common/Header";
import Tab from "@/components/common/tab";
import { getAllNewsCategories } from "@/lib/getAllNewsCategories";
import NewsSection from "@/components/NewsSection";
import { getNewsByCategory } from "@/lib/getNewsByCategory";

export default async function NewsPage({ params }) {
  // Convert params to a resolved promise
  const { slug } = await Promise.resolve(params);

  // Fetch service details
  const newsByCategory = await getNewsByCategory(slug);

  if (!newsByCategory) return <div>News not found</div>;
  const newsCategories = await getAllNewsCategories(); // Fetch data on the server

  return (
    <>
      <Header />

      <div className="container mx-auto p-4">
        <Tab service={newsCategories} />

        <NewsSection allNews={newsByCategory} />
      </div>
    </>
  );
}
