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
import Footer from "@/components/common/Footer";

export default async function ServiceDetailPage({ params }) {
  // const router = useRouter();
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
  const { slug } = await Promise.resolve(params);
  const service = await getServiceById(slug);
  const titleSlug = capitalizeWordsExcept(slug.split("-").join(" "));

  // Fetch service details

  if (!service) return <div>Service not found</div>;

  return (
    <>
      <section>
        <Header />
      </section>

      <section>
        <div className=" w-full bg-[#f4e4c9] py-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-inter font-medium mb-4 text-[#a58255]">
              {titleSlug}
            </h1>
            <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className=" text-[#a58255] font-inter">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/services" className="text-[#a58255] fon-inter">Services</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>

                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={`/services/${slug}`}
                      className="capitalize text-[#007367] font-inter"
                    >
                      {titleSlug}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="max-w-screen-xl mx-auto  my-4 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 cursor-pointer ">
            {service.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section>
            <Footer/>
      </section>
    </>
  );
}
