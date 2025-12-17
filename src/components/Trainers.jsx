import React, { useRef, useEffect } from "react";
import trainer1 from "../images/trainer1.jpg";
import trainer2 from "../images/trainer2.jpg";
import trainer3 from "../images/trainer3.jpg";

const trainers = [
  { name: "John Smith", image: trainer1 },
  { name: "Sarah Khan", image: trainer2 },
  { name: "David Lee", image: trainer3 },
  { name: "John Smith", image: trainer1 },
  { name: "Sarah Khan", image: trainer2 },
  { name: "David Lee", image: trainer3 },
];

const Trainers = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;

      container.scrollBy({
        left: 320,
        behavior: "smooth",
      });

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-20 container mx-auto max-w-7xl relative overflow-hidden">

      {/* Headings */}
      <div className="text-center mb-12">
        <h3 className="text-[#fdc700] font-semibold text-lg sm:text-xl tracking-widest">
          OUR TRAINERS
        </h3>
        <h2 className="text-white text-4xl font-bold mt-2">
          Our Professional Coaches
        </h2>
      </div>

      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 
                   bg-[#fdc700] w-12 h-12 rounded-full 
                   text-2xl font-bold z-10 
                   hover:bg-yellow-300 shadow-2xl border-2 border-white transition"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 
                   bg-yellow-400 w-12 h-12 rounded-full 
                   text-2xl font-bold z-10 
                   hover:bg-yellow-300 shadow-2xl border-2 border-white transition"
      >
        ›
      </button>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-10 px-10 overflow-hidden scroll-smooth"
      >
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="min-w-[260px] h-[360px] relative 
                       rounded-3xl overflow-hidden group shadow-2xl 
                       border-4 border-[#fdc700] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-white"
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-full object-cover 
                         will-change-transform 
                         transition-transform duration-500 group-hover:scale-105"
            />

            {/* Name Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-end p-4 transition-all duration-500 group-hover:bg-black/25">
              <h4 className="text-white text-xl font-semibold 
                             backdrop-blur-sm p-2 rounded-md transition">
                {trainer.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Trainers;
