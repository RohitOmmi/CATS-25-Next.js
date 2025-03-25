import Header from "@/components/common/Header";
import Tab from "@/components/common/tab";
import { getAllNews } from "@/lib/getAllNews";
import { getDetailedNews } from "@/lib/getDetailedNews";
import { getNewsByCategory } from "@/lib/getNewsByCategory";

async function innerSlug({ params }) {
  const { slug, innerSlug } = await Promise.resolve(params);
  const newsDetails = await getDetailedNews(innerSlug);

  const allNews = await getAllNews();
  const newsByCategory = await getNewsByCategory(slug);

  if (!newsDetails) return <div>Detailed News not found</div>;
  console.log(allNews);
  console.log(newsByCategory);

  const moduleName = [...allNews, ...newsByCategory].filter(
    (each) => each.news_title === newsDetails.news_title
  );

  console.log(
    moduleName[0]?.l2_name || moduleName[0]?.l2_catname,
    "moduleName"
  );
  return (
    <>
      <Header />
      <div className="p-4 border rounded-lg shadow-md mt-20">
        <h2 className="text-xl text-black font-bold">
          {moduleName[0]?.l2_name || moduleName[0]?.l2_catname}
        </h2>
      </div>
      <div>
        <h1>{newsDetails.news_title}</h1>

        <p>{newsDetails.full_description}</p>
      </div>
    </>
  );
}

export default innerSlug;
