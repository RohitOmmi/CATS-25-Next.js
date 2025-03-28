import Header from "@/components/common/Header";
import ServiceCard from "@/components/common/ServiceCard";
import { getInnerServiceById } from "@/lib/getInnerServiceById";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function ServiceInnerDetailPage({ params }) {
  // console.log("Inner Paramas", params);
  // Convert params to a resolved promise
  function capitalizeWordsExcept(str, exceptions = ["and", "services"]) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) =>
        exceptions.includes(word)
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
  }
  const { slug, innerSlug } = await Promise.resolve(params);
  const fullSlugParameter = `${slug}/${innerSlug}`;
  const service = await getInnerServiceById(fullSlugParameter);
  const titleSlug = capitalizeWordsExcept(slug.split("-").join(" "));
  const titleSlug2 = capitalizeWordsExcept(innerSlug.split("-").join(" "));
  // Fetch service details

  // console.log(service.l3menu_data, "MeNu DATA");
  // console.log(service.services_data, "Service DATA");

  if (!service) return <div>Service not found</div>;
  const firstTab = service.l3menu_data[0]?.sub_cat_name || "";
  return (
    <>
      <section>
        <Header />
      </section>

      <section>
        <div className="w-full bg-[#f4e4c9] py-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-[#a58255]">
              {titleSlug2}
            </h1>
            {/* Bread crumb component */}
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
                    <BreadcrumbLink href="/services">Services</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={`/services/${slug}`}
                      className="capitalize"
                    >
                      {titleSlug}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={`/services/${slug}/${innerSlug}`}
                      className="capitalize"
                    >
                      {titleSlug2}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto p-4">
          {/* <h1 className="text-3xl font-bold mb-4">Our Services Inner slug</h1> */}

          <div>
            <div>
              {/* <div className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
                <h2 className="text-xl font-bold">{innerData.sub_cat_name}</h2>
              </div> */}
            </div>
            <div>
              <Tabs defaultValue={firstTab} className="flex  gap-2">
                <TabsList className="shrink-0" >
                  {service.l3menu_data.map((innerData, index) => (
                    <TabsTrigger
                      key={index}
                      value={innerData.sub_cat_name}
                      className=" text-center p-2 border border-gray-300 "
                    >
                      <h1 className="text-xl font-bold">
                        {innerData.sub_cat_name}
                      </h1>
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className=" h-[calc(100vh-300px)] overflow-y-auto">
                {service.services_data.map((serviceData, index) => (
                  
                  <TabsContent key={index} value={serviceData.sub_cat_name} >
                    <div>
                      <h2 className="text-xl font-semibold text-[#007367]">
                        {serviceData.sub_cat_name}
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: serviceData.description,
                        }}
                      />
                    </div>
                  </TabsContent>
                  
                ))}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
