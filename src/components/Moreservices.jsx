
import img6 from "../images/gym4.jpg";
import img7 from "../images/gym3.jpg";
import img8 from "../images/gym5.jpg";

const Moreservices = () => {
    const services = [
      {
        image: img6,
        description: "Nutrition & Fitness Consultation – Get expert guidance tailored to your goals.",
      },
      {
        image: img7,
        description: "Men’s & Women’s Sections – Separate training areas for comfort and privacy.",
      },
      {
        image: img8,
        description: "Locker Rooms & Showers – Clean, safe, and convenient facilities for every member.",
      },
    ];
  return (
    <div>

          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 mb-10">
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
    </div>
  )
}

export default Moreservices