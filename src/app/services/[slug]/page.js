
import Header from "@/components/common/Header";
import ServiceCard from "@/components/common/ServiceCard";
import { getServiceById } from "@/lib/getServiceById";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
export default async function ServiceDetailPage({ params }) {
  // const router = useRouter();
  // Convert params to a resolved promise
  function capitalizeWordsExcept(str, exceptions = ["and", "services"]) {
    return str
      .toLowerCase()
      .split(" ")
      .map(word =>
        exceptions.includes(word) ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
  }
  const { slug } = await Promise.resolve(params);
  const service = await getServiceById(slug);
   const titleSlug= capitalizeWordsExcept(slug.split("-").join(" "))
   
  
  // Fetch service details
  
 
  if (!service) return <div>Service not found</div>;

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <div className="bg-[#f4e4c9]">
            <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-[#a58255]">{titleSlug}</h1>
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
                      <BreadcrumbLink href="/services">
                        Services
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                      <BreadcrumbSeparator>
                      <Slash />
                      </BreadcrumbSeparator>
                 
                    
                    <BreadcrumbItem>
                      <BreadcrumbLink  href={`/services/${slug}`} className="capitalize">
                        {titleSlug}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
              
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </div>
      {/* <div>
        <h1 className="text-3xl font-bold mb-4">{titleSlug}</h1>
      </div> */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {service.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}


// "use client"; // ✅ Ensures the component runs on the client side

// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import Header from "@/components/common/Header";
// import ServiceCard from "@/components/common/ServiceCard";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Slash } from "lucide-react";
// import { getServiceById } from "@/lib/getServiceById";

// export default function ServiceDetailPage() {
//   const pathname = usePathname(); // ✅ Get full URL path
//   const router = useRouter(); // ✅ For navigation
//   console.log(pathname);

//   // ✅ Extract Slug from URL
//   const slug = decodeURIComponent(pathname.split("/").pop() || ""); // Gets the last part of the path

//   // ✅ Capitalize Title Except Certain Words
//   function capitalizeWordsExcept(str, exceptions = ["and", "services"]) {
//     return str
//       .toLowerCase()
//       .split(" ")
//       .map((word) =>
//         exceptions.includes(word) ? word : word.charAt(0).toUpperCase() + word.slice(1)
//       )
//       .join(" ");
//   }

//   const titleSlug = capitalizeWordsExcept(slug.replace(/-/g, " "));

//   // ✅ Fetch Service Data
//   const [service, setService] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(getServiceById(pathname));
//         const data = await res.json();
//         setService(data);
//       } catch (error) {
//         console.error("Error fetching service:", error);
//       }
//     }
//     fetchData();
//   }, [slug]);

//   if (!service) return <div>Loading...</div>;

//   return (
//     <div className="max-w-screen-xl mx-auto">
//       <Header />
//       <div className="bg-[#f4e4c9]">
//         <div className="max-w-screen-xl mx-auto">
//           <h1 className="text-3xl font-bold mb-4 text-[#a58255]">{titleSlug}</h1>

//           {/* ✅ Breadcrumb Navigation */}
//           <Breadcrumb>
//             <BreadcrumbList>
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/">Home</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator>
//                 <Slash />
//               </BreadcrumbSeparator>
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/services">Services</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator>
//                 <Slash />
//               </BreadcrumbSeparator>
//               <BreadcrumbItem>
//                 {/* ✅ Fix navigation issue by using `router.push()` */}
//                 <button
//                   onClick={() => router.push(`/services/${slug}`)}
//                   className="text-blue-600 underline"
//                 >
//                   {titleSlug}
//                 </button>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//       </div>

//       {/* ✅ Display Service Cards */}
//       <div className="container mx-auto p-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {service.map((serviceItem) => (
//             <ServiceCard key={serviceItem.id} service={serviceItem} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
