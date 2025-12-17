import React from 'react';
// Import your image file
import TrainersImage from '../images/choose-us-img.png'; // Adjust the path according to your folder structure

const Whychoose = () => {
  return (
    <section
      className="relative mt-11 pt-16 pb-16 px-4 md:px-10 container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between rounded-3xl"
     
    >
      {/* Left: Trainers Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={TrainersImage} // Use the imported image
          alt="Trainers"
          className="w-full max-w-md rounded-xl"
        />
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 text-white md:pl-12">
        <p className="text-[#fdc700] font-semibold text-lg sm:text-xl mb-2">Why Choose Us</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          The Reason Why You Should Join Us
        </h2>
        <ul className="space-y-3">
          {[
            "We provide professional & certified trainers.",
            "You can consult with our trainers for free.",
            "More than 100+ gyms spread all over the world.",
            "You can join the community for free.",
            "We provide quality gyms of affordable prices."
          ].map((item, idx) => (
            <li key={idx} className="flex items-center">
              {/* Blue gradient checkmark circle */}
              <span
                className="rounded-full p-1 mr-3 w-6 h-6 flex items-center justify-center text-white"
                style={{
                  background: "linear-gradient(135deg, #4b3ad3, #1a6ff2)"
                }}
              >
                ✔
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Whychoose;
