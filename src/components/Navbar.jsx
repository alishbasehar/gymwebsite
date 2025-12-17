import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // React Router

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (item) => {
    setActive(item);
    setMenuOpen(false);

    // Navigation logic
    if (item === "Home") {
      if (location.pathname !== "/") navigate("/");
    } else if (item === "About") {
      navigate("/Aboutus"); // About page
    } else if (item === "Services") {
      navigate("/Services"); // Services page
    } else if (item === "Contact") {
      navigate("/Contact"); // Contact page
    }
  };

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl text-white font-bold">
          <span className="text-[#fdc700]">Q</span>R GYM.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-25">
          <ul className="flex gap-8 text-lg font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => handleLinkClick(item)}
                className={`cursor-pointer relative transition ${
                  active === item ? "text-[#fdc700]" : "text-white"
                } hover:text-[#fdc700"]`}
              >
                {item === "About" ? "About Us" : item}
                {active === item && (
                  <span className="absolute left-0 -bottom-1 w-1/2 h-0.5 bg-white"></span>
                )}
              </li>
            ))}
          </ul>

          <button
            className="px-6 py-2 rounded-full text-white font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
           style={{
                background: 'linear-gradient(135deg, #6db4e0, #352ad3)',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg,  #352ad3 ,#6db4e0)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #6db4e0, #352ad3)';
              }}
          >
            Join Us
          </button>
        </div>

        {/* Mobile Menu */}
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
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu List */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-black text-white py-6 gap-4 items-center">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleLinkClick(item)}
              className={`cursor-pointer text-lg ${active === item ? "text-[#fdc700]" : "text-white"}`}
            >
              {item === "About" ? "About Us" : item}
            </li>
          ))}

          <button
            className="px-6 py-2 rounded-full text-white font-bold transition-all hover:-translate-y-1"
            style={{ background: "linear-gradient(135deg, #352ad3, #0861f2)" }}
          >
            Join Us
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
