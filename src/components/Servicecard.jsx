
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import { useNavigate } from "react-router-dom";

const services = [
  {
    image: img1,
    description: "Modern strength equipment and personalized routines.",
  },
  {
    image: img2,
    description: "HIIT, running, and endurance workouts for all levels.",
  },
  {
    image: img3,
    description: "Build strength safely with expert guidance.",
  },
];

const Servicecard = () => {
   const navigate = useNavigate()
  return (
    <section className="bg-black text-white py-20" id="services">
      {/* 🔹 Heading */}
      <div className="text-center mb-16">
        <p className="text-[#fdc700]  font-semibold text-lg sm:text-xl mb-2">Our Services</p>
        <h2 className="text-sm sm:text-2xl lg:text-4xl font-bold leading-snug">
         QR Gym offers a full range of training options  <br/>designed to fit every goal and level 
        </h2>
      </div>

      {/* 🔹 Cards */}
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-[80%] sm:w-[85%] md:w-[85%] lg:w-[30%] flex justify-center"
          >
            <div className="relative group w-full sm:w-[55%] md:w-[48%] lg:w-80 h-110 md:h-115 rounded-2xl overflow-hidden bg-[#1f1f1f] transition-all duration-500 flex flex-col">

              {/* 🔹 Image with hover gradient */}
              <div className="relative z-10 h-72 flex items-center justify-center group-hover:cursor-pointer">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-[#6db4e0] to-[#352ad3] rounded-2xl" />
                <img
                  src={service.image}
                  alt="Service"
                  className="h-64 object-contain transition-transform duration-500 group-hover:scale-105 relative z-20"
                />
              </div>

              {/* 🔹 Description below image with hover background yellow */}
              <div className="z-20 mt-4 text-center px-6">
                <h3 className="text-white text-sm sm:text-base font-semibold px-6 py-3 border-2 border-white rounded-2xl shadow-lg transition-all duration-300 cursor-pointer hover:text-yellow-400">
                  {service.description}
                </h3>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Button */}
      <div className="flex justify-center mt-16">
          <button
          onClick={() => navigate("/Services")}
              className="px-5 sm:px-8 py-2 sm:py-3 rounded-full text-white font-bold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-auto"
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
             View all services
            </button>
      </div>
    </section>
  );
};

export default Servicecard;
