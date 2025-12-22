import { FaLightbulb, FaBullseye } from "react-icons/fa";

const Mission = () => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.boxShadow =
      "0 25px 60px rgba(165,129,32,0.55)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.4)";
  };

  const cardClasses =
    "relative bg-gradient-to-br from-[#1E2939] to-[#0f172a] text-white p-10 rounded-3xl transition-all duration-300 hover:-translate-y-2 group";

  const iconClasses =
    "w-16 h-16 bg-[#A58120] text-[#1E2939] flex items-center justify-center rounded-full absolute -top-8 left-10 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300";

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Mission Card */}
        <div
          className={cardClasses}
          style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={iconClasses}>
            <FaBullseye />
          </div>
          <h3 className="text-2xl font-bold mt-12 mb-4">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed text-base">
            To help every member unlock their full potential through
            personalized training, expert guidance, and a supportive
            community that motivates consistency and growth.
            <br />
            <br />
            We’re on a mission to redefine fitness by creating a space
            where everyone feels empowered to start — and stay — on
            their fitness journey.
          </p>
        </div>

        {/* Vision Card */}
        <div
          className={cardClasses}
          style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={iconClasses}>
            <FaLightbulb />
          </div>
          <h3 className="text-2xl font-bold mt-12 mb-4">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed text-base">
            To become Qatar’s most trusted and inspiring fitness
            community — where passion meets performance.
            <br />
            <br />
            We envision a future where fitness becomes a lifestyle,
            not a task, and where QR Gym sets the standard for quality,
            innovation, and results.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Mission;
