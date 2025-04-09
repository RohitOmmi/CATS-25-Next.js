import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import CustomCalendar from "@/components/CustomCalendar";
// import CalendarComponent from "@/components/CalendarComponent";
// import DateTimeFormWrapper from "@/components/DateTimeFormWrapper";
export default function page() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <div className="w-full bg-[#f4e4c9] py-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-[#a58255] font-inter">
              Events
            </h1>
            <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="font-inter">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/training"
                      className="font-inter text-[#007367]"
                    >
                      Training
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* Content */}
        <div className="max-w-screen-xl mx-auto ">
          <h1 className="text-[#a58255] font-inter text-[22px] my-4">
          Scheduled Trainings
          </h1>
          <div className="6">
            <div className=" px-4  rounded-md mb-10">
              <CustomCalendar />
            </div>
           
          </div>
        </div>
      </section>
      {/* <section><Footer /></section> */}
    </>
  );
}
