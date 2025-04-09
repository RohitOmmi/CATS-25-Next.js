import { getServices } from "@/lib/getServices";
import ServiceCard from "@/components/common/ServiceCard";
import Header from "@/components/common/Header";
import MainLayout from "@/components/MainLayout";
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

export default async function ServicePage() {
  const services = await getServices(); // Fetch data on the server

  return (
    <>
      
        <section>
          <Header />
        </section>
        <section>
          <div className=" w-full bg-[#f4e4c9] py-4">
            <div className="max-w-screen-xl mx-auto">
              <h1 className="text-2xl font-medium mb-4 text-[#a58255]  font-formaDJrMedium">
                Services
              </h1>
              <div>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/" className="text-[#a58255]">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/services" className="text-[#007367]">Services</BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </section>
        <section> 
          <div className="max-w-screen-xl mx-auto my-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 focus:pointer mt-2">
              {services.map((service) => (
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
