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
            <h1 className="text-3xl font-bold mb-4 text-[#a58255]">
              {titleSlug}
            </h1>
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
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {service.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
