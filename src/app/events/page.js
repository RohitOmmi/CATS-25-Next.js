import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getEvents } from "@/lib/getEvents";
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
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

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
            <h1 className="text-3xl font-bold mb-4 text-[#a58255]">Events</h1>
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
                    <BreadcrumbLink href="/events">Events</BreadcrumbLink>
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
            <Tabs defaultValue="all events" className="flex  h-full">
              <TabsList className="shrink-0">
                <TabsTrigger
                  value="all events"
                  className="py-2 px-4 font-bold w-full"
                >
                  <h1 className="text-xl font-bold">All Events</h1>
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
                    const shortText = words.slice(0, 40).join(" ");
                    const isLong = words.length > 100;

                    return (
                      <div
                        key={index}
                        className="mb-4 p-4 border rounded-lg shadow-md"
                      >
                        <h2 className="text-xl font-bold text-[#a58255]">
                          {event.event_name}
                        </h2>
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
                              className="text-gray-500  mt-2 block"
                            >
                              <h3>Read More →</h3>
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </TabsContent>
              </div>
                
            </Tabs>
            <div className="shrink-0 py-4">
                  <PaginationComponent totalPages={totalPages} />
                </div>
          </div>
          {/* Pagination */}
          {/* <div className="shrink-0 py-4" >
            <Pagination>
              <PaginationContent className="flex justify-center space-x-2">
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      href={`/events?page=${currentPage - 1}`}
                    />
                  </PaginationItem>
                )}

                {[...Array(totalPages)].map((_, pageIndex) => (
                  <PaginationItem key={pageIndex}>
                    <PaginationLink
                      href={`/events?page=${pageIndex + 1}`}
                      className={
                        pageIndex + 1 === currentPage
                          ? "font-bold text-blue-500"
                          : ""
                      }
                    >
                      {pageIndex + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext href={`/events?page=${currentPage + 1}`} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div> */}
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
