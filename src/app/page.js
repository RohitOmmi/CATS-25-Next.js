"use client"; // ✅ Needed for dynamic import & useState

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/common/Header";
import { getHomeSlider } from "@/lib/getHomeSlider";
import Search from "../components/common/Search"
// Lazy-load Carousel Component
const CarouselComponent = dynamic(
  () => import("@/components/CarouselComponent"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function fetchSlides() {
      const data = await getHomeSlider();
      setSlides(data);
    }
    fetchSlides();
  }, []);

  // console.log(slides);
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto h-[80px] relative">
        <Header />
      </div>
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[60%]  z-30">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center bg-opacity-80 p-3 rounded-md">
          <div className="w-full md:flex-grow mb-4">
            <Search className="w-full max-w-[700px] px-3 py-2 bg-white rounded-md shadow-lg" />
          </div>
          <div className="border-l-2 border-white pl-3 mt-8">
            <a href="/bellCats" target="_blank">
              <h1 className="text-xl text-white whitespace-nowrap">
                Bell the CATS
              </h1>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center px-2 md:px-0">
        {slides ? (
          <CarouselComponent slides={slides} />
        ) : (
          <h1>Data Not Found</h1>
        )}
      </div>
    </div>
  );
}
