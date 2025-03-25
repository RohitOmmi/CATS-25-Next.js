"use client"; // ✅ Needed for dynamic import & useState

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/common/Header";
import { getHomeSlider } from "@/lib/getHomeSlider";

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
      <div className="max-w-screen-xl mx-auto h-[10vh]">
        <Header />
      </div>
      <div className="w-full flex justify-center">
        {slides ? (
          <CarouselComponent slides={slides} />
        ) : (
          <h1>Data Not Found</h1>
        )}
      </div>
    </div>
  );
}
