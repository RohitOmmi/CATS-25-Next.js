import * as React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { IoHandRightOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa6";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export default async function BellCats() {
  const data = [
    {
      title: "Buying tech, like",
      description:
        "I want to purchase software, computers, and renew AMC/subscriptions for my academic course, lab, office, or research.",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776992176ab1.png",
    },
    {
      title: "Network connectivity, like",
      description:
        "Connecting to network / LAN or WiFi., Device registration with GITAM, Need a new WiFi or LAN connectivity, Issues with existing WiFi or LAN.",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776998d7a1b1.png",
    },
    {
      title: "Identity and Access services, like",
      description:
        "Your registration number or Emp ID, Replacement of your ID cards, Issues with your face recognition, Biometric machines, door access, turnstiles. ",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776992176ab1.png",
    },
    {
      title: "Desktop and printer services, like",
      description:
        "Your registration number or Emp ID, Replacement of your ID cards, Issues with your face recognition, Biometric machines, door access, turnstiles.",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776992176ab1.png",
    },
    {
      title: "Surveillance services, like",
      description:
        "Request for CCTV recorded footage, Adding CCTV cameras at your premises, Requesting CCTV live views, Issues with NVRs, adding disk drives etc.,",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_67769968b85dd.png",
    },
    {
      title: "Research services, like",
      description:
        "Login to G-Cluster (High performance computer, HPC), Research Equipment reservation, Help with applications like G-Scholar, G-Academic profile, Library E-resource subscriptions",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776992176ab1.png",
    },
    {
      title: "Communication & Collaboration services, like",
      description:
        "Email services - password resets, name changes etc., Google Workspace and Microsoft-M365 services, Videoconferencing like Teams, Zoom, Meet etc., Telephony, broadcasting, text messages, desktop messages.",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_677fae203f49a.png",
    },
    {
      title: "Academic lab technicians, like",
      description:
        "Remote OS installations and patches, Remote software installations, Remote support for safe exam browsers, Dell direct support - ticket man",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776992176ab1.png",
    },
    {
      title: "AV services, like",
      description:
        "YProjector and TV / display issues, Microphone and, speaker issues, Recording and live streaming, Setting up LED walls etc.,",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776992176ab1.png",
    },
    {
      title: "Events, like",
      description:
        "Setting up desktops and printers, Setting up WiFi and LAN, Setting up Projectors, displays etc, Event registrations, payments, websites etc.,",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776992176ab1.png",
    },
    {
      title: "Academic software, like",
      description:
        "Course offerings and course registrations, Attendance, question banks and assessments, Mid / End semester Exams and Evaluations, Results, certificates and convocations.",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776992176ab1.png",
    },
    {
      title: "Hospitality software, like",
      description:
        "Dining - mess and canteens, subscriptions, Groceries and material management, Residences - student and staff room management, Travel desk - Air travels and guest room management.",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776992176ab1.png",
    },
    {
      title: "Administration software, like",
      description:
        "HRMS - Pay-slips, LOPS, leaves, resignations etc., Finance - Receipts, online payments, scholarships, Assets - Inventory, moves and changes, Admissions - Applications, counseling, inductions.",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776992176ab1.png",
    },
    {
      title: "Websites and mobile apps, like",
      description:
        "Web profile updates and automation, Mobile apps - Diners, Security, My-GITAM, Website design for workshop and conferences, Event postings on website.",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_67769958ae83b.png",
    },
    {
      title: "Security services, like",
      description:
        "Surveillance footages, Visitor and material gate-passes, Turnstiles and boom barriers, Access controls.",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_67769968b85dd.png",
    },
    {
      title: "Buying tech, like",
      description:
        "<ul><li>I want to buy software for my academic course/lab</li><li>I want to buy software for my office / research</li><li>I want to buy computer for my office / my research</li><li>I want to renew AMC and subscriptions</li></ul>",
    },
    {
      title: "My-GITAM, like",
      description:
        "<ul><li>Academic software like G-Learn, G-Courses etc.,</li><li>Hospitality software like G-Diner, G-Travel etc.,</li><li>Hospital software like BHIM (GIMSR), Dental etc.,</li><li>Administration software like G-HRMS, G-Pay etc.,</li></ul>",
    },
    {
      title: "Network connectivity, like",
      description:
        "<ul><li>Connecting to network / LAN or WiFi.,</li><li>Device registration with GITAM</li><li>Need a new WiFi or LAN connectivity</li><li>Issues with existing WiFi or LAN</li></ul>",
    },
    {
      title: "Identity and Access services, like",
      description:
        "<ul><li>Your registration number or Emp ID</li><li>Replacement of your ID cards</li><li>Issues with your face recognition</li><li>Biometric machines, door access, turnstiles</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_677fae203f49a.png",
    },
    {
      title: "Desktop and Printer services, like",
      description:
        "<ul><li>Unable to login to your computer, unable to print</li><li>RAM / HDD / Monitor / keyboards / Webcams etc.,</li><li>OS / software installations / white-block listing</li><li>Safe exam browsers, patches, upgrades etc.,</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_67769958ae83b.png",
    },
    {
      title: "Surveillance services, like",
      description:
        "<ul><li>Request for CCTV recorded footage</li><li>Adding CCTV cameras at your premises</li><li>Requesting CCTV live views</li><li>Issues with NVRs, adding disk drives etc.,</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_677fae203f49a.png",
    },
    {
      title: "Research services, like",
      description:
        "<ul><li>Login to G-Cluster (High performance computer, HPC)</li><li>Research Equipment reservation</li><li>Help with applications like G-Scholar</li><li>Library E-resource subscriptions</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776998d7a1b1.png",
    },
    {
      title: "Communication & Collaboration services, like",
      description:
        "<ul><li>Email services - password resets, name changes etc.,</li><li>Google Workspace and Microsoft-M365 services</li><li>Videoconferencing like Teams, Zoom, Meet etc.,</li><li>Telephony, broadcasting, text messages, desktop messages etc.,</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_677fae203f49a.png",
    },
    {
      title: "Academic lab technicians, like",
      description:
        "<ul><li>Remote OS installations and patches</li><li>Remote software installations</li><li>Remote support for safe exam browsers</li><li>Dell direct support - ticket management.</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_67769958ae83b.png",
    },
    {
      title: "AV services, like",
      description:
        "<ul><li>Projector and TV / display issues</li><li>Microphone and, speaker issues</li><li>Recording and live streaming</li><li>Setting up LED walls etc.,</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_67769968b85dd.png",
    },
    {
      title: "Events, like",
      description:
        "<ul><li>Setting up desktops and printers</li><li>Setting up WiFi and LAN</li><li>Setting up Projectors, displays etc</li><li>Event registrations, payments, websites etc.,</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_67769968b85dd.png",
    },
    {
      title: "Teaching and learning software, like",
      description:
        "<ul><li>Course offerings and course registrations</li><li>Attendance, question banks and assessments</li><li>Mid / End semester Exams and Evaluations</li><li>Results, certificates and convocations</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_6776998d7a1b1.png",
    },
    {
      title: "Hospitality software, like",
      description:
        "<ul><li>Dining - mess and canteens, subscriptions</li><li>Groceries and material management</li><li>Residences - student and staff room management</li><li>Travel desk - Air travels and guest room management</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_677fae203f49a.png",
    },
    {
      title: "Administration software, like",
      description:
        "<ul><li>HRMS - Pay-slips, LOPS, leaves, resignations etc.,</li><li>Finance - Receipts, online payments, scholarships</li><li>Assets - Inventory, moves and changes</li><li>Admissions - Applications, counseling, inductions</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_67769958ae83b.png",
    },
    {
      title: "Websites and mobile Apps, like",
      description:
        "<ul><li>Web profile updates</li><li>Mobile apps - Diners, Security, My-GITAM</li><li>Workshop and conference website designs and management</li></ul>",
      img: "https://guprojects.gitam.edu/catscms2/public/services/maincat_67769968b85dd.png",
    },
  ];
  
  return (
    <>
      <section id="top">
        <Header />
      </section>
      <section>
        <div className="w-full bg-[#f4e4c9] py-4 relative">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-[#a58255]">
              Bell the CATS
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
                    <BreadcrumbLink href="/bellCats" className="font-inter">
                      Bell the CATS
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto relative" >
        <div className="grid grid-cols-12 md:grid-cols-3 my-4">
          {data.map((each, index) =>
            each.img ? (
              // Render this block if each.img exists

              <div  key={index} className=" relative border border-gray-300 w-[380px] h-[280px] m-[10px] mb-4">
                <div className="bg-[#007367] text-left text-white font-inter text-[16px] px-2 py-1">
                  {each.title}
                </div>
                <div className=" flex items-center justify-center ">
                  <img
                    src={each.img}
                    alt={each.title}
                    className="w-[150px] h-[100px]  p-2 object-cover "
                  />
                  <div className="font-inter text-[16px] text-center " dangerouslySetInnerHTML={{__html:each.description}}/>
                 
                </div>
                <div className="flex flex-row justify-end p-4 absolute bottom-2 right-2"><a  href="" target="_blank"><IoHandRightOutline className="w-6 h-6 text-[#007367]" /></a></div>
              </div>
            ) : (
              // Render this block if each.img does NOT exist

              <div  key={index} className="border border-gray-300 w-[380px] h-[250px] m-[10px] mb-4 relative">
                <div className="bg-[#007367] text-left text-white font-inter text-[18px] py-1">
                  {each.title}
                </div>
                <div className="font-inter text-[16px] text-center justify-center items-center" dangerouslySetInnerHTML={{__html:each.description}}/>
                <div className="flex flex-row justify-end absolute bottom-8 right-2"><a  href="#top" target="_blank"><IoHandRightOutline className="w-6 h-6 text-[#007367]" /></a></div>
              </div>
               
            )
          )}
          
        </div>
        <div href="#top" ><a href="#top" className="fixed bottom-9 right-2 bg-[#007367] p-2 rounded-sm w-10 h-10 flex items-center justify-center">
  <FaArrowUp className="text-white w-6 h-6" />
</a>
</div>
      </section> 

      <section>
        <Footer />
      </section>
    </>
  );
}
