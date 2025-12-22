import React from 'react';
import AboutImage from '../images/bgabout.png';


const Aboutmain = () => {

    
  return (
    <section className="relative mt-10 bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-16" id="about">

      {/* Animation */}
      <style>{`
        @keyframes zoomInOut {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-zoom-in-out {
          animation: zoomInOut 2s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-10">

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={AboutImage}
            alt="About Us"
            className="rounded-2xl shadow-2xl object-cover w-full max-w-sm sm:max-w-md md:max-w-md"
          />

          {/* 20+ Experience Badge */}
          <div
            className="
              absolute
              
              top-6 left-10
              sm:top-6 sm:left-25
              md:top-8 md:left-8
              lg:top-10 lg:left-25
              bg-gray-900 animate-zoom-in-out
              border border-[#A58120]
              rounded-full
              w-20 h-20
              sm:w-24 sm:h-24
              flex flex-col justify-center items-center text-center
              mt-10
            "
          >
            <span className="text-[#A58120] font-bold text-lg sm:text-xl">
              20+
            </span>
            <span className="text-white text-[10px] sm:text-xs leading-tight">
              Years of Experience
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-[#A58120] text-lg sm:text-xl font-semibold mb-4">
            About Us
          </p>

        

          <p className="mb-4 text-gray-300 text-sm sm:text-base leading-7.5 text-justify">
            Welcome to *QR Gym*, your ultimate destination for fitness, strength, and transformation.
Located in the heart of *Al Refaa, Doha – Qatar*, QR Gym is designed to inspire and empower individuals of all fitness levels.
Our state-of-the-art facilities, expert trainers, and motivating environment make every workout an opportunity to become stronger — both physically and mentally.
At QR Gym, we believe that fitness is not just about building your body, it’s about building your confidence, your energy, and your lifestyle.
          </p>

         

     
        </div>

      </div>
    </section>
  );
};

export default Aboutmain;
