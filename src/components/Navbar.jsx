import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // React Router
import logo from '../images/logo.jpg'


const Navbar = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = ["Home", "About", "Services", "Contact"];

  const handleLinkClick = (item) => {
    setMenuOpen(false);

    // Navigation logic
    if (item === "Home") navigate("/");
    else if (item === "About") navigate("/Aboutus");
    else if (item === "Services") navigate("/Services");
    else if (item === "Contact") navigate("/Contact");
  };

  // helper function to map item to path
  const getPath = (item) => {
    if (item === "Home") return "/";
    if (item === "About") return "/Aboutus";
    if (item === "Services") return "/Services";
    if (item === "Contact") return "/Contact";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
     
  <img
    src={logo}
    alt="QR Gym"
    className="h-auto w-15 rounded-md"
  />



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-25">
          <ul className="flex gap-8 text-lg font-medium">
            {navItems.map((item) => {
              const path = getPath(item);
              const isActive = location.pathname === path;

              return (
                <li
                  key={item}
                  onClick={() => handleLinkClick(item)}
                  className={`cursor-pointer relative transition ${
                    isActive ? "text-[#A58120]" : "text-white"
                  } hover:text-[#A58120]`}
                >
                  {item === "About" ? "About Us" : item}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-1/2 h-0.5 bg-white"></span>
                  )}
                </li>
              );
            })}
          </ul>

          <button
            className="px-6 py-2 rounded-full text-white font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #A58120, #bcac71",
              transition: "background 0.3s ease",
            }}
            onClick={() => navigate("/Contact")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg,  #bcac71 ,#A58120)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #A58120, #bcac71)";
            }}
          >
            Join Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu List */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-black text-white py-6 gap-4 items-center">
          {navItems.map((item) => {
            const path = getPath(item);
            const isActive = location.pathname === path;

            return (
              <li
                key={item}
                onClick={() => handleLinkClick(item)}
                className={`cursor-pointer text-lg ${
                  isActive ? "text-[#A58120]" : "text-white"
                }`}
              >
                {item === "About" ? "About Us" : item}
              </li>
            );
          })}

          <button
            className="px-6 py-2 rounded-full text-white font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #A58120, #bcac71)",
              transition: "background 0.3s ease",
            }}
             onClick={() => navigate("/Contact")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #bcac71, #A58120  )";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg,#A58120, #bcac71)";
            }}
          >
            Join Us
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
