"use client"; // ✅ Ensures interactivity

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getHomeSlider } from "@/lib/getHomeSlider";
import { Button } from "./ui/button";

// import linesImg from "../../public/assets/images/lines.png";

const colors = ["bg-[#007367]", "bg-[#428bc1]", "bg-[#f28f8f]", "bg-[#a58255]"];
const textColor = ["#007367", "#428bc1", "#f28f8f", "#a58255"];
const backgroundColors = [
  "bg-[#79ccc2]",
  "bg-[#69abe1]",
  "bg-[#d95d61]",
  "bg-[#cabb90]",
];

const linesImg = "/assets/images/lines.png";
// image path for slider img
const Imgpath= "https://guprojects.gitam.edu/catscms2/public/slider/";

export default function CarouselComponent() {
  const [slides, setSlides] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHomeSlider();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-screen h-full flex justify-center">
      <Carousel className="w-full  ">
        <CarouselContent className="h-full">
          {slides.length > 0 ? (
            slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className={`min-h-[100vh]  flex justify-center ${backgroundColors[index]} relative`}
              >
            
                <img
                  src={linesImg}
                  alt="lines"
                  className="w-[210px] h-[200px] left-0 absolute "
                />
                
                <div className="max-w-screen-xl w-full h-full  flex flex-col justify-center   relative ">
                  

                  <Card
                    className={`h-auto w-full  ${colors[index]}  border-none`}
                  >
                    <div>
                      <h1
                        className={`text-xl font-semibold bg-white w-[18.33%] px-3 py-2`}
                        style={{color:textColor[index]}}
                      >
                        {slide.label}
                      </h1>
                    </div>
                    <CardContent className="grid grid-cols-3 gap-2 px-14 py-12 ">
                      <div className="col-span-2 pt-2 md:pt-7  py-6">
                        <div className="text-4xl font-medium">
                          <h2 className="text-3xl text-white font-semibold font-inter">
                            {slide.title1 || `Slide ${index + 1}`}
                          </h2>
                        </div>
                        <p className="text-white text-[18px] font-inter my-4 ">
                          {slide.description1}
                        </p>
                        <div className="my-4">
                          <a href={`${slide.readmore1}`} target="_blank">
                            <Button className="bg-transparent border border-white text-white font-inter hover:bg-[#f4e4c9] hover:text-black hover:border-none ">
                              Read more
                            </Button>
                          </a>
                        </div>
                      </div>

                      {/* media for context */}
                      <div className="col-span-1 ">
                        {slide.slider_image1 ? (
                          <img
                            src={`${Imgpath}/${slide.slider_image1}`}
                            alt="media for context"
                            className="w-[300px] h-[250px] object-cover"
                          />
                        ) : slide.iframe1 ? (
                          <iframe
                            src={slide.iframe1}
                            title="Embedded video"
                            className="w-[400px] h-[250px]"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <p className="text-white">No media available</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading...</p>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
