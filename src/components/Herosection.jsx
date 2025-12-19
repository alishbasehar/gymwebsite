
import heroImage from '../images/banner.png';
import { useNavigate } from "react-router-dom";

const Herosection = () => {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden">
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-zoom-in-out { animation: zoomInOut 3s ease-in-out infinite; }
          .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        `}
      </style>

      <div className="container max-w-7xl  mt-20 lg:min-h-[100vh] lg:h-screen relative mx-auto px-8 py-10 md:py-16 flex flex-col md:flex-row items-center  justify-between">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-[#0b123a] to-black -z-10"></div>

        {/* Text Content */}
        <div className="text-white md:w-1/2 z-10 text-center md:text-left space-y-6">
<h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 leading-snug animate-fade-in-up"
  style={{ animationDelay: '0.2s' }}
>
  {/* Line 1 */}
  <span className="block text-white">
    QR GYM WHERE <span className="text-[#fdc700]">STRENGTH</span>
  </span>

  {/* Line 2 */}
  <span className="block">
    <span className="text-white">MEETS </span>
    <span className="text-[#fdc700] font-bold">PASSION</span>
  </span>
</h1>

          

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center md:justify-start w-full animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            {/* Start Now Button */}
            <button
              className="px-5 sm:px-8 py-2 sm:py-3 rounded-full text-white font-bold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-auto"
              onClick={() => navigate("/Aboutus")}
              
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
              Start now
            </button>

            {/* Watch Video Button */}
           <button
  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1 sm:py-2 bg-[#fdc700] hover:bg-yellow-500 rounded-full text-black font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-auto justify-center text-xs sm:text-sm"
  onClick={() => window.open("https://www.tiktok.com/@qrgym0/video/7584207811815542034?_r=1&_t=ZS-9197GaYMHQ7", "_blank")}
>
  <span className="text-lg sm:text-xl">▶</span>
  <span className="text-xs sm:text-sm">Watch A Video</span>
</button>

          </div>
        </div>

        {/* Image Container */}
        <div className=" max-w-xl md:max-w-2xl lg:max-w-4xl mt-6 md:mt-0 relative z-10 flex justify-center md:justify-end animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="relative w-full max-w-md md:max-w-lg pb-12 md:pb-16">
            <img
              src={heroImage}
              alt="Fitness Model"
              className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700"
            />

            {/* Stats Bar */}
            <div className="absolute -b-1 left-1/2 transform -translate-x-1/2 p-2 sm:p-3 bg-black bg-opacity-40 backdrop-blur-sm rounded-xl border border-gray-800 max-w-sm animate-zoom-in-out w-10/12">
              <div className="flex justify-between items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex gap-1 hover:scale-105 transition-transform duration-700">
                    <div className="w-1 h-4 sm:w-1.5 sm:h-6 bg-[#fdc700] rounded"></div>
                    <div className="w-1 h-6 sm:w-1.5 sm:h-8 bg-[#5946EE] rounded"></div>
                    <div className="w-1 h-3 sm:w-1.5 sm:h-6 bg-[#fdc700] rounded"></div>
                  </div>
                  <div className="text-white text-center sm:text-left">
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">Performance</p>
                    <p className="text-xs sm:text-sm md:text-base font-bold">98% Success Rate</p>
                  </div>
                </div>

                <div className="text-center sm:text-right shrink-0">
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">Clients</p>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-white">5000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 w-28 sm:w-36 h-28 sm:h-36 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-48 sm:w-60 h-48 sm:h-60 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Herosection;
