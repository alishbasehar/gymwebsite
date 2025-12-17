import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";


const Contactus = () => {
  return (
    <div className="bg-black  text-white  px-5 py-10">
      <div className=" container max-w-7xl mx-auto">
        <h1 className="text-center text-[#fdc700] pt-10  font-semibold text-lg sm:text-xl mb-4">Contact Us</h1>
        

        {/* Cards */}
 <div className="flex flex-wrap justify-between mt-25  gap-5 mb-25">
  {/* Contact */}
  <div className="relative bg-gray-800 text-white p-6 rounded-3xl flex-1 min-w-[250px] text-center shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-2 group">
    <div className="w-16 h-16 bg-[#fdc700] text-gray-900 flex items-center justify-center rounded-full absolute -top-8 left-10 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
      <PhoneIcon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2 mt-12">Contact</h3>
    <p>+1 234 5687 90</p>
    <p>+9 876 5432 10</p>
  </div>

  {/* Email */}
  <div className="relative bg-gray-800 text-white p-6 rounded-3xl flex-1 min-w-[250px] text-center shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-2 group">
    <div className="w-16 h-16 bg-[#fdc700] text-gray-900 flex items-center justify-center rounded-full absolute -top-8 left-10 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
      <EnvelopeIcon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2 mt-12">Email Address</h3>
    <p>info@example.com</p>
    <p>contact@example.com</p>
  </div>

  {/* Address */}
  <div className="relative bg-gray-800 text-white p-6 rounded-3xl flex-1 min-w-[250px] text-center shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-2 group">
    <div className="w-16 h-16 bg-[#fdc700] text-gray-900 flex items-center justify-center rounded-full absolute -top-8 left-10 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
      <MapPinIcon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2 mt-12">Address</h3>
    <p>127 7th Ave, Brooklyn, North Dakota, US</p>
  </div>
</div>


        {/* Form + Map */}
        <div className="flex flex-wrap gap-8 mt-20">
  {/* Form */}
  <div className="flex-1 min-w-[300px]">
    <form className="relative bg-gradient-to-br from-[#1E2939] to-[#0f172a] p-10 rounded-3xl shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-1">
      
      <h2 className="text-3xl font-bold mb-6 text-white">
        Get In Touch
      </h2>

      {/* Full Name */}
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-4 rounded-xl bg-[#0f172a] text-white placeholder-gray-400 border border-gray-700 focus:border-[#fdc700] focus:ring-2 focus:ring-[#fdc700]/30 outline-none transition mb-4"
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-4 rounded-xl bg-[#0f172a] text-white placeholder-gray-400 border border-gray-700 focus:border-[#fdc700] focus:ring-2 focus:ring-[#fdc700]/30 outline-none transition mb-4"
        required
      />

      {/* Mobile */}
      <input
        type="text"
        placeholder="Mobile Number"
        className="w-full p-4 rounded-xl bg-[#0f172a] text-white placeholder-gray-400 border border-gray-700 focus:border-[#fdc700] focus:ring-2 focus:ring-[#fdc700]/30 outline-none transition mb-4"
        required
      />

      {/* Message */}
      <textarea
        rows="5"
        placeholder="Your Message"
        className="w-full p-4 rounded-xl bg-[#0f172a] text-white placeholder-gray-400 border border-gray-700 focus:border-[#fdc700] focus:ring-2 focus:ring-[#fdc700]/30 outline-none transition mb-6 resize-none"
        required
      ></textarea>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-[#fdc700] text-black font-bold py-4 rounded-xl hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/40 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  </div>

  {/* Map */}
  <div className="flex-1 min-w-[300px] h-[450px]">
    <iframe
      className="w-full h-full rounded-3xl shadow-xl"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.811908477209!2d-73.97252338459284!3d40.65514407933232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2081d35b9b%3A0x531b3a3f7f4a7f19!2sSoldiers%20and%20Sailors%20Memorial%20Arch!5e0!3m2!1sen!2sus!4v1698794146738!5m2!1sen!2sus"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      </div>
    </div>
  );
};

export default Contactus;
