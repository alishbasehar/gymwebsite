
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" container mx-auto max-w-7xl  bg-linear-to-r 
                from-black 
                via-[#0b123a] 
                to-black text-white p-10">
      
      {/* Footer columns */}
      <div className="flex flex-col lg:flex-row md:justify-between md:items-start flex-wrap max-w-7xl mx-auto gap-8">
        
        {/* Column 1: About */}
        <div className="flex-1 min-w-50">
        <h1 className="text-2xl font-bold text-white mb-2">
  <span className="text-[#fdc700]">Q</span>R Gym
</h1>
          <p>
            Welcome to <strong>QR Gym</strong>, your ultimate destination for fitness, strength, and transformation. Located in the heart of <strong>Al Refaa, Doha – Qatar</strong>, QR Gym is designed to inspire and empower individuals of all fitness levels.
          </p>
        </div>

        {/* Column 2: Quick Links */}
   <div className="flex-1 min-w-[150px]">
  <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
  <ul className="space-y-1">
    <li>
      <Link to="/" className="hover:text-[#fdc700] transition">
        Home
      </Link>
    </li>
    <li>
      <Link to="/Aboutus" className="hover:text-[#fdc700] transition">
        About Us
      </Link>
    </li>
    <li>
      <Link to="/Services" className="hover:text-[#fdc700] transition">
        Services
      </Link>
    </li>
    <li>
      <Link to="/Contact" className="hover:text-[#fdc700] transition">
        Contact Us
      </Link>
    </li>
  </ul>
</div>


        {/* Column 3: Contact Info with Icons */}
       <div className="flex-1 min-w-50 space-y-6">
  <h2 className="text-xl font-semibold mb-2">Contact Us</h2>

  

<p className="flex items-center gap-3">
  <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-[#fdc700] text-white">
    <FaPhone className="text-lg" />
  </span>
  +974 1234 5678
</p>


  <p className="flex items-start gap-3">
  <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-[#fdc700] text-white">
    <FaMapMarkerAlt className="text-lg" />
  </span>
  <span>
    First floor, directly opposite the National Museum – Al Riffa area, Doha, Qatar
  </span>
</p>

</div>


        {/* Column 4: Working Hours & Socials with Icons */}
        <div className="flex-1 min-w-50">
          <h2 className="text-xl font-semibold mb-2">Working Hours</h2>
          <p>Everyday: 6 am to 2 am</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Our Socials</h2>
          <div className="flex space-x-6">
  <a
    href="https://www.facebook.com/profile.php?id=61583350382077&sk=about"

    target="_blank"
  rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fdc700] text-white text-xl
               "
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/qr_gym/?igsh=MmdyNzlobGtlbWE&utm_source=qr"
    target="_blank"
  rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fdc700] text-white text-xl
              "
  >
    <FaInstagram />
  </a>
<a
  href="https://www.tiktok.com/@qrgym0?_r=1&amp;_t=ZS-9197GaYMHQ7"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fdc700] text-white text-xl"
>
  <FaTiktok />
</a>


 
</div>

        </div>
      </div>

      {/* Bottom row */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-400 text-sm">
        © 2025 QR Gym. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
