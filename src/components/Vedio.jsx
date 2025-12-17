import React, { useState } from "react";
import vedio from "../videos/video.mp4";
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
      rgba(77, 120, 200, 0.93),
      rgba(32, 25, 120, 0.93)
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
            className="w-full h-full object-contain rounded-3xl pointer-events-none"
          />
        </div>

        {/* Play Button */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     text-white p-3 sm:p-4 md:p-5 rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     shadow-lg hover:scale-110 transition-transform duration-300"
          style={{
            background: "linear-gradient(135deg, #4b3ad3, #1a6ff2)",
          }}
        >
          ►
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
          <div className="max-w-xl md:max-w-4xl lg:max-w-4xl aspect-video">
            <video
              src={vedio}
              controls
              autoPlay
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Vedio;
