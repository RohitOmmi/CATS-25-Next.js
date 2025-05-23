import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import { SlClock } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";
export default async function page() {
  const locationTabs = [
    { tabs: "Visakhapatnam" },
    { tabs: "Hyderabad" },
    { tabs: "Bengaluru" },
    { tabs: "GIMSR" },
    { tabs: "Bell the CATS" },
  ];

  const tabContent = [
    {
      tabs: "Visakhapatnam",
      adrs: "CATS department <br> 8th floor<br>ICT bhavan<br>GITAM Deemed to be<br>University<br>Gandhi Nagar<br>Rushikonda<br>Visakhapatnam - 530045<br>Andhra Pradesh<br>India",
      time: "9 AM to 6 PM<br> Monday to Friday",
      mail: "catsoffice@gitam.edu",
      landline: "Landline - 0891-<br>2840555<br>IP phone - 4800",
    },

    {
      tabs: "Hyderabad",
      adrs: "CATS department<br> A-block<br> 3<sup>rd</sup> floor<br> GITAM Deemed to be<br> University<br>Rudraram<br> Patancheru mandal<br>Hyderabad - 502329 <br>Telangana<br> India",
      time: "9 AM to 6 PM<br> Monday to Friday",
      mail: "catsoffice@gitam.edu",
      landline: "Landline -<br>9703409652<br>IP phone - 1500",
    },

    {
      tabs: "Bengaluru",
      adrs: "CATS department<br> 6<sup>th</sup> floor<br>Shivaji bhavan <br> GITAM Deemed to be<br> University<br>NH 207, Nagadenehalli<br>Doddaballapur taluk<br>Bengaluru - 561203 <br>Karnataka<br> India",
      time: "9 AM to 6 PM<br> Monday to Friday",
      mail: "catsoffice@gitam.edu",
      landline: "Landline -<br>7348960606<br>IP phone - 2824",
    },

    {
      tabs: "GIMSR",
      adrs: "CATS department<br> 8<sup>th</sup> floor <br> ICT bhavan<br GITAM Deemed to be<br> University<br> Gandhi Nagar<br> Rushikonda<br>Visakhapatnam - 530045<br>Andhra Pradesh<br> India",
      time: "9 AM to 6 PM<br> Monday to Friday",
      mail: "catsoffice@gitam.edu",
      landline: "Landline - 0891-<br>2840555<br>IP phone - 4800",
    },
    {
      tabs: "Bell the CATS",
      info: "Bell the CATS is GITAM's dedicated service ticket management system designed tostreamline to support across all 4 campuses. This platform enables staff, faculty, and students to raise service requests efficiently, ensuring prompt resolution and effective communication with the support teams.",
    },
  ];

  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <div className=" w-full bg-[#f4e4c9] py-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-[#a58255] ">Contact</h1>
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
                    <BreadcrumbLink href="/contact" className="font-inter text-[#007367]">
                      Contact
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row p-4">
            <div className="  md:w-[60%]">
              <Tabs
                defaultValue={locationTabs[0].tabs}
                className="flex flex-col h-full w-full"
              >
                <div className="flex flex-col md:flex-row w-full md:gap-2">
                  {/* Sidebar Tabs List */}
                  <TabsList className="flex flex-col justify-between md:flex-col w-[70%] sm:ms-0 md:w-1/3 mx-3 ">
                    {locationTabs.map((each, index) => (
                      <TabsTrigger
                        key={index}
                        value={each.tabs}
                        className="flex  sm:flex-wrap md:flex-col py-1 md:py-3 px-4  font-inter font-semibold w-[30%] md:w-full justify-between items-center text-left"
                      >
                        <div className=" flex flex-row justify-between items-center">
                          <h1 className="sm:text-[16px] md:text-xl font-md font-inter">
                            {each.tabs}
                          </h1>
                          <ChevronRight className="w-3 h-3 text-black" />
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {/* Content Area */}
                  <div className="w-2/3">
                    {tabContent.map((each, index) => (
                      <TabsContent
                        key={index}
                        value={each.tabs}
                        className="p-4 w-full rounded-lg"
                      >
                        {each.tabs === "Bell the CATS" ? (
                          <div className="text-lg tracking-wide">
                            <h1 className="text-[18px] md:text-xl text-[#a58255] font-semibold font-inter">
                              Bell the CATS
                            </h1>
                            <p className=" text-[16px] md:text-[18px] font-inter">{each.info}</p>
                            <a
                              href="https://bellthecats.gitam.edu/scp/login.php"
                              target="_blank"
                              rel="noopener noreferrer"
                              className=" mt-4 inline-block bg-[#fff]  border border-gray text-gray px-4 py-2 rounded-lg   transition font-inter"
                            >
                              Raise a request
                            </a>
                          </div>
                        ) : (
                          <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex items-start ">
                              <CiLocationOn className="w-8 h-8  text-[#a58255]" />
                              <div
                                className="tracking-wide font-inter"
                                dangerouslySetInnerHTML={{ __html: each.adrs }}
                              />
                            </div>
                            <div className="flex-col items-start mx-2 ">
                              <div className="flex items-start gap-2 mt-2">
                                <strong>
                                  <SlClock className=" w-5 h-7 text-[#a58255]" />
                                </strong>{" "}
                                <span
                                  className="font-inter"
                                  dangerouslySetInnerHTML={{
                                    __html: each.time,
                                  }}
                                />
                              </div>
                              <div className="flex items-start gap-2 mt-2">
                                <strong>
                                  <GoMail className="w-5 h-7 text-[#a58255]" />
                                </strong>{" "}
                                <span className="font-inter">{each.mail}</span>
                              </div>
                              <div className="flex items-start gap-2 mt-2">
                                <strong>
                                  <FiPhone className="w-5  h-7 text-[#a58255]" />
                                </strong>{" "}
                                <span
                                  className="font-inter"
                                  dangerouslySetInnerHTML={{
                                    __html: each.landline,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </TabsContent>
                    ))}
                  </div>
                </div>
              </Tabs>
            </div>
            {/* FORM */}
            <div className="bg-[#f4e4c9] md:w-[40%] h-full p-4 ml-4 mt-4">
              <div>
                <h1 className="text-[#a58255] text-2xl font-semibold px-4">
                  Get in touch
                </h1>
                <form className="p-4 sm:mb-10">
                  <input
                    type="text"
                    placeholder="Name"
                    className=" w-full bg-[#fff] rounded-md  border-3 border-gray-500 px-2 py-2 mb-4"
                  />
                  <div className=" w-full flex flex-col  items-start md:flex-row md:justify-between md:items-center mb-4">
                    <input
                      type="number"
                      placeholder="Mobile number"
                      className="sm:w-full md:w-1/2 sm:mb-4 bg-[#fff] rounded-md    border-3 border-gray-500 px-2 py-2 md:mr-2  "
                    />
                    <input
                      type="mail"
                      placeholder="Email"
                      className="sm:w-full md:w-1/2 sm:mb-4 bg-[#fff] rounded-md  border-3 border-gray-500 px-2 py-2 md:ml-2 "
                    />
                  </div>
                  <div className="w-full">
                    <textarea
                      type="text"
                      rows="2"
                      placeholder="Enter Query"
                      name="Query"
                      className="px-2 w-full "
                    ></textarea>
                    {/* <label htmlFor="Query" className="text-red font-inter text-[12px]">This Field Required*</label> */}
                  </div>
                  <div className="w-full flex flex-row items-center justify-center mx-auto mt-4">
                    <Button className="bg-[#007367] text-white">Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
