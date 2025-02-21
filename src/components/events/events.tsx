"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useState, useEffect } from "react"

const events = [
  {
    title: "A MAGICAL JOURNEY",
    description: "Join DSS VJIT for their magical event bliss!",
    subtitle: "A Place where ideas meet reality and tech meets magic.",
    buttonText: "Attend Now",
    image: "/images/events/car1.jpg"
  },
  {
    title: "INNOVATE & CREATE",
    description: "Explore the world of innovation with DSS",
    subtitle: "Where creativity knows no bounds",
    buttonText: "Join Now",
    image: "/images/events/car2.webp"
  },
  {
    title: "TECH SYMPOSIUM",
    description: "Experience the future of technology",
    subtitle: "Bringing together the brightest minds in tech",
    buttonText: "Register Now",
    image: "/images/events/car3.jpg"
  },
  {
    title: "COLLABORATIVE SPIRIT",
    description: "Build, Learn, and Grow Together",
    subtitle: "Join our community of innovators",
    buttonText: "Join Us",
    image: "/images/events/car4.jpg"
  }
]

export function EventCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % events.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full py-8">
      <Carousel 
        index={index} 
        onIndexChange={setIndex} 
        className="w-full"
      >
        <CarouselContent className="relative">
          {events.map((event, idx) => (
            <CarouselItem key={idx}>
              <Card className="relative overflow-hidden">
                <CardContent className="p-0">
                  <div 
                    className="relative h-[250px] md:h-[450px] bg-cover bg-center flex flex-col justify-end p-4 md:p-8"
                    style={{ 
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="relative text-white">
                      <h2 className="text-xl md:text-3xl font-bold mb-2">{event.title}</h2>
                      <p className="text-sm md:text-lg mb-3 md:mb-4">{event.description}</p>
                      <p className="text-xs md:text-sm mb-4 md:mb-6">{event.subtitle}</p>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-md transition-colors text-sm md:text-base">
                        {event.buttonText}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-12 right-8 hidden md:flex space-x-2 z-10">
        {events.map((event, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setIndex(idx)}
            className={`relative h-16 w-16 overflow-hidden transition-all ${
              index === idx 
                ? 'ring-2 ring-blue-500 ring-offset-2' 
                : 'opacity-70 hover:opacity-100'
            }`}
            style={{
              borderRadius: '4px',
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${event.image})`,
              }}
            />
            {index === idx && (
              <div className="absolute inset-0 bg-blue-500/20" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}