import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getEvents } from "@/lib/getEvents";
import { ChevronRight } from "lucide-react";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
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
import PaginationComponent from "@/components/PaginationComponent";
import { format } from "date-fns";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "dd MMM, yyyy | hh:mm a"); // Example: 03 Jan, 2025 | 02:30 PM
};
const EVENTS_PER_PAGE = 3;
export default async function ServicePage({ searchParams }) {
  const events = await getEvents(); // Fetch data on the server
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);

  const paginatedEvents = events.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  return (
    <div>
      <section>
        <Header />
      </section>

      {/* Breadcrumb  */}
      <section>
        <div className="w-full bg-[#f4e4c9] py-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-[#a58255] font-inter sm:p-2 md:p-0">
              Events
            </h1>
            <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="font-inter p-2">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/events"
                      className="font-inter  text-[#007367] sm:p-2 md:p-0"
                    >
                      Events
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto p-4 ">
          <div>
            <Tabs
              defaultValue="all events"
              className=" tab-container flex  h-full"
            >
              <TabsList className="shrink-0">
                <TabsTrigger
                  value="all events"
                  className="py-2 px-4 font-bold w-full"
                >
                  <div className="flex flex-row  items-center justify-between">
                    <h1 className="text-xl font-semibold text-left font-inter">
                      All Events
                    </h1>
                    <ChevronRight className="w-3 h-3 text-black" />
                  </div>
                </TabsTrigger>
              </TabsList>
              <div className="  h-[calc(100vh-300px)] overflow-y-auto">
                <TabsContent value="all events" className="w-[full]">
                  {/* {events.map((Events, index) => (
                    <div  key={index} className="w-full h-auto flex felx-col item-center justify-start border border-red-600">
                      <div className="flex flex-row justify-between">
                        <h2 className="text-xl  text-left font-medium  text-[#a58255]">
                          {Events.event_name}
                        </h2>
                      </div>
                      <div className="my-2">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: Events.full_description,
                          }}
                        />
                      </div>
                    </div>
                  ))} */}
                  {paginatedEvents?.map((event, index) => {
                    const words = event.full_description.split(" ");
                    const shortText = words.slice(0, 20).join(" ");
                    const isLong = words.length > 100;

                    return (
                      <div key={index} className="mb-4 p-4 border  shadow-md">
                        <div>
                          <h2 className="text-[16px] md:text-xl font-bold text-[#a58255] font-inter">
                            {event.event_name}
                          </h2>
                          <strong></strong>
                        </div>

                        <div className="my-2">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: isLong
                                ? shortText
                                : event.full_description,
                            }}
                          />
                          {isLong && (
                            <a
                              href={events?.readmore_link}
                              className="text-gray-500  font-inter mt-2 block"
                            >
                              {/* <h3>Read More →</h3> */}
                            </a>
                          )}
                        </div>
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex items-start  gap-1">
                            <strong className="text-[#a58255] mt-1">
                              <SlCalender />
                            </strong>
                            <span className="text-[14px] md:text-[18px]font-inter text-[#007367]">
                              {formatDate(event.start_date)}
                            </span>
                          </div>
                          <div className="flex items-start gap-1">
                            <strong className="text-[#a58255] mt-1">
                              <CiLocationOn />
                            </strong>
                            <span className="font-inter text-[#007367]">
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </TabsContent>
              </div>
            </Tabs>
            <div className="shrink-0 py-4  mb-10 md:mb-0">
              <PaginationComponent totalPages={totalPages} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
