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
    <>
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
    </>
  );
}

// import { getAllNews } from "@/lib/getAllNews";
// import Header from "@/components/common/Header";
// import Tab from "@/components/common/tab";
// import { getAllNewsCategories } from "@/lib/getAllNewsCategories";
// import NewsSection from "@/components/NewsSection";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Slash } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Footer from "@/components/common/Footer";
// import PaginationComponent from "@/components/PaginationComponent";

// const NEWS_PER_PAGE=3;
// export default async function NewsPage({searchParams}) {

//   const allNews = await getAllNews();
//   const newsCategories = await getAllNewsCategories();
//   const currentPage= Number(searchParams?.page)||1;
//   const totalPages=Math.ceil(allNews.length/NEWS_PER_PAGE) ;

//   const paginatedNews = allNews.slice(
//     (currentPage - 1) * NEWS_PER_PAGE,
//     currentPage * NEWS_PER_PAGE
//   );
//   return (
//     <div>
//       <section>
//         <Header />
//       </section>

//       <section>
//         <div className="bg-[#f4e4c9] w-full py-4 ">
//           <div className="max-w-screen-xl mx-auto">
//             <h1 className="text-3xl font-bold mb-4 text-[#a58255] ">News</h1>
//             <div>
//               <Breadcrumb>
//                 <BreadcrumbList>
//                   <BreadcrumbItem>
//                     <BreadcrumbLink href="/">Home</BreadcrumbLink>
//                   </BreadcrumbItem>
//                   <BreadcrumbSeparator>
//                     <Slash />
//                   </BreadcrumbSeparator>
//                   <BreadcrumbItem>
//                     <BreadcrumbLink href="/news">News</BreadcrumbLink>
//                   </BreadcrumbItem>
//                 </BreadcrumbList>
//               </Breadcrumb>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section>
//         <div className="max-w-screen-xl mx-auto">
//           <Tabs defaultValue="All News" className="flex  h-full">
//             <TabsList className="shrink-0">
//               <TabsTrigger value="All News" className="font-bold w-full"><h1  className="font-semibold text-xl" >All News</h1></TabsTrigger>
//               {newsCategories.map((categories,index)=>(
//               <TabsTrigger key={index} value={categories.main_category_name}  className="font-bold w-full">
//                 <h1 className="text-xl font-semibold">{categories.main_category_name}</h1>
//               </TabsTrigger>
//             ))}
//             </TabsList>
//             <div className="  h-[calc(100vh-300px)] overflow-y-auto overflow-x-hidden">
//             {newsCategories.map((categories,index1)=>{
//             {paginatedNews?.map((allnews,index)=>{
//                const words = allnews.full_description.split(" ");
//                const shortText = words.slice(0, 40).join(" ");
//                const isLong = words.length > 100;
//              return(
//               <TabsContent key={index1} value={categories.main_category_name === allnews.l1_catname ? allnews.l1_catname :"All News"} className="w-full">
//                 <div className="">
//                   <div className=" w-full border border-gray-400 shadow-sm p-4 my-2" key={index}>
//                     <div className="flex flex-row items-center justify-between mx-2">
//                       <div className="bg-[#f4e4c9] rounded-md px-1"><small>{allnews.l2_catname}</small></div>
//                       <div className="bg-[#f4e4c9] rounded-md px-1"><small>{allnews.news_date}</small></div>
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-medium text-[#a58255]">{allnews.news_title}</h2>
//                     </div>
//                     <div>

//                       <p className="text-[18px] text-black" dangerouslySetInnerHTML={{__html:isLong
//                                   ? shortText
//                                   : allnews.full_description,}}/>
//                                 {isLong && (
//                               <a
//                                 href="#"
//                                 className="text-gray-500  mt-2 block"
//                             >
//                                 <h3>Read More →</h3>
//                               </a>
//                             )}
//                     </div>
//                   </div>
//                 </div>
//               </TabsContent>
//              )
//               })}
//             })}

//             </div>
//           </Tabs>
//         </div>
//         <div className="shrink-0">
//           <PaginationComponent totalPages={totalPages}/>
//         </div>
//       </section>

//       <section>
//         <Footer />
//       </section>
//     </div>
//   );
// }
