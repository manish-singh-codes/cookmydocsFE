"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Card, CardContent } from "../ui/card"
import { motion } from "motion/react"
import Autoplay from "embla-carousel-autoplay"
import React from "react"

const Templates = () => {
  const template = [
    {
      id: 1,
      name: "Template 1",
      description: "A modern resume template with a clean design.",
      image: "/template1.webp",
    },
    {
      id: 2,
      name: "Template 2",
      description: "A professional resume template with a classic look.",
      image: "/template2.png",
    },
    {
      id: 3,
      name: "Template 3",
      description: "A professional resume template with a classic look.",
      image: "/template3.avif",
    },
    {
      id: 4,
      name: "Template 4",
      description: "A professional resume template with a classic look.",
      image: "/template4.png",
    },
    {
      id: 5,
      name: "Template 5",
      description: "A professional resume template with a classic look.",
      image: "/template5.jpeg",
    },
    {
      id: 6,
      name: "Template 6",
      description: "A professional resume template with a classic look.",
      image: "/template5.jpeg",
    },
    {
      id: 7,
      name: "Template 7",
      description: "A professional resume template with a classic look.",
      image: "/template4.png",
    },
    {
      id: 8,
      name: "Template 8",
      description: "A professional resume template with a classic look.",
      image: "/template3.avif",
    },
    {
      id: 9,
      name: "Template 9",
      description: "A professional resume template with a classic look.",
      image: "/template2.png",
    },
    {
      id: 10,
      name: "Template 10",
      description: "A professional resume template with a classic look.",
      image: "/template1.webp",
    },
  ]

   const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  )


  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-6 text-center sm:text-left">
        Build your resume with our trending templates
      </h2>

      <Carousel className="w-full" plugins={[plugin.current]}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {template.map((temp, index) => (
            <CarouselItem
              key={temp.id}
              className="pl-2 md:pl-4 basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="p-1">
                <Card className="h-full py-2 bg-gray-400/30 hover:bg-green-500/20 transition-colors duration-300 overflow-hidden">
                  <CardContent className="px-3">
                    <div className="group cursor-pointer">
                      {/* Fixed aspect ratio container for consistent image heights */}
                      <div className=" flex items-center justify-center mb-2">
                        <span className=" text-center text-gray-700 text-lg ">#{index+1}</span>
                      </div>
                      <div className="relative overflow-hidden aspect-[3/4] w-full mb-3 rounded-lg bg-white shadow-sm">
                        <Image
                          src={temp.image || "/placeholder.svg"}
                          alt={temp.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out"
                          sizes=""
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className=" -left-2 h-10 w-10 md:h-20 md:w-20 " />
        <CarouselNext className="-right-2 h-10 w-10 md:h-20 md:w-20 " />
      </Carousel>

    </div>
  )
}

export default Templates
