import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { ShareIcon } from "@heroicons/react/24/outline";



const Contactus = () => {
  return (
    <div className="bg-black  text-white  px-5 py-10">
      <div className=" container max-w-7xl mx-auto">
        <h1 className="text-center text-[#fdc700] pt-10  font-semibold text-lg sm:text-xl mb-4">Contact Us</h1>
        

        {/* Cards */}
 <div className="flex flex-col md:flex-row justify-between mt-25  gap-10 mb-25">
  {/* Contact */}
  <div className="relative bg-gray-800 text-white p-6 rounded-3xl flex-1 min-w-[250px] text-center shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-2 group">
    <div className="w-16 h-16 bg-[#fdc700] text-gray-900 flex items-center justify-center rounded-full absolute -top-8 left-10 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
      <PhoneIcon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2 mt-12">Contact</h3>
    <p>66474187</p>
   
  </div>

  {/* Email */}
 
<div className="relative bg-gray-800 text-white p-6 rounded-3xl flex-1 min-w-[250px] text-center shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-2 group">

  {/* Icon Circle */}
  <div className="w-16 h-16 bg-[#fdc700] text-gray-900 flex items-center justify-center rounded-full absolute -top-8 left-10 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
    <ShareIcon className="w-6 h-6" />
  </div>

  <h3 className="text-xl font-semibold mb-4 mt-12">Follow Us</h3>

  {/* Social Icons */}
  <div className="flex justify-center gap-6 text-2xl">
    <a href="https://www.facebook.com/profile.php?id=61583350382077&sk=about" className="hover:text-[#fdc700] transition-colors"
    
     target="_blank"
  rel="noopener noreferrer"
    >
      <FaFacebookF />
    </a>
    <a href="https://www.instagram.com/qr_gym/?igsh=MmdyNzlobGtlbWE&utm_source=qr" className="hover:text-[#fdc700] transition-colors"
    
     target="_blank"
  rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://www.tiktok.com/@qrgym0?_r=1&amp;_t=ZS-9197GaYMHQ7" className="hover:text-[#fdc700] transition-colors"
    
     target="_blank"
  rel="noopener noreferrer">
      <FaTiktok />
    </a>
  </div>

</div>

  {/* Address */}
  <div className="relative bg-gray-800 text-white p-6 rounded-3xl flex-1 min-w-[250px] text-center shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-2 group">
    <div className="w-16 h-16 bg-[#fdc700] text-gray-900 flex items-center justify-center rounded-full absolute -top-8 left-10 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
      <MapPinIcon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2 mt-12">Address</h3>
    <p>First floor, directly opposite the National Museum – Al Riffa area, Doha, Qatar</p>
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
  <div className="flex-1 min-w-[300px] h-[450px] mt-15">
    <iframe
      className="w-full h-full rounded-3xl shadow-xl"
      src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3607.528831962829!2d51.54507667580174!3d25.286430666256944!3m2!1i1024!2i768!4f13.1!2m1!1zVHJhbnN3b3JsZCtUb3dlcitNdXNldW0rUGsrU3QsK9in2YTYr9mI2K3YqSwrMTM5NTcsK1FB!5e0!3m2!1sen!2s!4v1766044464402!5m2!1sen!2s"
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
