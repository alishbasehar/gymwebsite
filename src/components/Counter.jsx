import React, { useEffect, useState } from "react";
import bgImage from "../images/bg-shape.png"; // apni image ka path

const data = [
  { number: 350, text: "Award Winning", suffix: "+" },
  { number: 50, text: "Total Branches", suffix: "+" },
  { number: 750, text: "Happy Clients", suffix: "+" },
  { number: 120, text: "Expert Trainers", suffix: "+" },
];

const CounterBox = ({ number, text, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 30000; // 5 seconds
    const intervalTime = 30; 
    const step = Math.ceil(number / (duration / intervalTime));

    // start the counter after next tick to avoid synchronous setState
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        start += step;
        if (start >= number) {
          setCount(number);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, intervalTime);

      
      return () => clearInterval(interval);
    }, 0);

    // cleanup timeout if component unmounts early
    return () => clearTimeout(timeout);
  }, [number]);

  return (
    <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center mb-6 sm:mb-0">
      <div className="absolute inset-0 rounded-full bg-blue-700 border-4 border-white/80"></div>
      <div className="relative z-10 text-center">
        <h3 className="text-4xl sm:text-5xl font-bold text-white">
          {count}{suffix}
        </h3>
        <p className="text-[#fdc700] font-semibold mt-3 text-base sm:text-lg">
          {text}
        </p>
      </div>
    </div>
  );
};


const Counter = () => {
  return (
    <section className="relative container mx-auto max-w-7xl mt-10 py-16 sm:py-20 overflow-hidden">
      
      {/* 🔹 Background Image */}
      <div
        className="absolute bg-white inset-0 lg:bg-cover bg-contain bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* 🔹 Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #6db4e0, #352ad3",
          opacity: 0.93, // slightly higher opacity
        }}
      />

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
  {data.map((item, index) => (
    <div
      key={index}
      className="w-full sm:w-[48%] lg:w-[23%] flex justify-center"
    >
      <CounterBox {...item} />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Counter;
