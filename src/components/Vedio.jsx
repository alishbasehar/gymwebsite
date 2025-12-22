import React, { useState } from "react";
import vedio from "../videos/vedio2.mp4";
import img2 from "../images/bg-shape.png";

const Vedio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="relative pt-10 px-4 md:px-10 container mx-auto max-w-7xl flex flex-col items-center justify-center rounded-3xl"
style={{
  backgroundImage: `
    linear-gradient(
      135deg,
      rgba(165, 129, 32, 0.9),
      rgba(188, 172, 113, 0.9),
      rgba(0, 0, 0, 0.99)
    ),
    url(${img2})
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  backgroundColor: "white",
}}


    >
      {/* Heading */}
      <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 max-w-3xl z-10 relative">
        Everything You Want Outside <br className="hidden sm:block" />
        Your Comfort Zone
      </h2>

      {/* Video Container */}
<div
  className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl top-8 z-20 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer border-[3px] border-white border-opacity-20"
  onClick={openModal}
>
  {/* Responsive aspect ratio wrapper */}
  <div className="w-full aspect-video">
    <video
      src={vedio}
      muted
      loop
      playsInline
      className="w-full h-full object-cover rounded-3xl pointer-events-none"
    />
  </div>

  {/* Play Button with glow animation */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div
      className="flex items-center pl-2 justify-center w-13 h-13 sm:w-18 sm:h-18 md:w-23 md:h-23 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulseGlow"
      style={{
        background: "linear-gradient(135deg, #A58120 , #bcac71)",
      }}
    >
      <span className="text-white text-3xl sm:text-4xl md:text-5xl leading-none">
        ►
      </span>
    </div>
  </div>  
</div>




      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl sm:text-4xl md:text-5xl font-bold hover:text-gray-300 transition"
          >
            ×
          </button>

          {/* Modal Video */}
          <div className="max-w-xl md:max-w-4xl lg:max-w-5xl aspect-video">
            <video
              src={vedio}
              controls
              autoPlay
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Glow Animation Keyframes */}
     {/* Glow Animation Keyframes */}
<style jsx>{`
  @keyframes pulseGlow {
    0% {
      box-shadow:
        0 0 10px rgba(255, 255, 255, 0.4),
        0 0 20px rgba(255, 255, 255, 0.3),
        0 0 30px rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow:
        0 0 20px rgba(255, 255, 255, 0.7),
        0 0 40px rgba(255, 255, 255, 0.5),
        0 0 60px rgba(255, 255, 255, 0.4);
    }
    100% {
      box-shadow:
        0 0 10px rgba(255, 255, 255, 0.4),
        0 0 20px rgba(255, 255, 255, 0.3),
        0 0 30px rgba(255, 255, 255, 0.2);
    }
  }

  .animate-pulseGlow {
    animation: pulseGlow 2s infinite ease-in-out;
  }
`}</style>

    </section>
  );
};

export default Vedio;
