import React, { useState } from "react";
import bgImage from "../images/bmi-bg.jpg";

const Bmicalculculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight || !age || !gender) return;

    const heightInMeter = height / 100;
    const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue < 25) setStatus("Healthy");
    else if (bmiValue < 30) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div
      className="pt-20 pb-20 container mx-auto max-w-7xl mt-10 
                 flex items-center justify-center px-4 
                 relative bg-cover bg-center rounded-3xl"
      style={{
       backgroundImage: `
           linear-gradient(
             135deg,
             rgba(165, 129, 32, 0.9),
             rgba(188, 172, 113, 0.9),
             rgba(0, 0, 0, 0.99)
           ),
           url(${bgImage})
         `,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
      }}
    >
      <div className="relative max-w-6xl w-full flex flex-col md:flex-row gap-10">

        {/* Left Section */}
        <div className="flex-1">
          <h3 className="text-white font-semibold">
            Body Mass Index
          </h3>
          <h1 className="text-white text-4xl font-bold mb-8">
            Calculate Your BMI
          </h1>

          <div className="flex flex-col gap-4">

            {/* Height */}
            <input
              type="number"
              placeholder="Height / cm"
              className="w-full px-5 py-3 rounded-full 
                         bg-white/20 text-white placeholder-white outline-none"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            {/* Weight */}
            <input
              type="number"
              placeholder="Weight / kg"
              className="w-full px-5 py-3 rounded-full 
                         bg-white/20 text-white placeholder-white outline-none"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            {/* Age */}
            <input
              type="number"
              placeholder="Age / years"
              className="w-full px-5 py-3 rounded-full 
                         bg-white/20 text-white placeholder-white outline-none"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            {/* Gender */}
            <div className="flex gap-4">
              <button
                onClick={() => setGender("Male")}
                className={`flex-1 py-3 rounded-full font-semibold transition
                  ${
                    gender === "Male"
                      ? "bg-[#A58120] text-black"
                      : "bg-white/20 text-black hover:bg-white/30"
                  }`}
              >
                Male
              </button>

              <button
                onClick={() => setGender("Female")}
                className={`flex-1 py-3 rounded-full font-semibold transition
                  ${
                    gender === "Female"
                      ? "bg-[#A58120] text-black"
                      : "bg-white/20 text-black hover:bg-white/30"
                  }`}
              >
                Female
              </button>
            </div>

            {/* Button */}
            <button
              onClick={calculateBMI}
              className="self-start bg-[#A58120]  text-black
                         font-semibold px-10 py-3 rounded-full 
                        transition"
                       

            >
              Calculate Now
            </button>

            {/* Result */}
            {bmi && (
              <div className="text-white mt-4 space-y-1">
                <p className="text-xl">
                  Your BMI: <b>{bmi}</b>
                </p>
                <p>
                  Status: <b>{status}</b>
                </p>
                <p>
                  Age: <b>{age}</b> | Gender: <b>{gender}</b>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white/15 backdrop-blur-md 
                        rounded-2xl overflow-hidden text-white">

          <div className="flex bg-[#A58120] text-black font-semibold">
            <div className="flex-1 p-4">BMI Range</div>
            <div className="flex-1 p-4">Weight Status</div>
          </div>

          <div className="flex border-t border-white/20">
            <div className="flex-1 p-4">Below 18.5</div>
            <div className="flex-1 p-4">Underweight</div>
          </div>

          <div className="flex border-t border-white/20">
            <div className="flex-1 p-4">18.5 – 24.9</div>
            <div className="flex-1 p-4">Healthy</div>
          </div>

          <div className="flex border-t border-white/20">
            <div className="flex-1 p-4">25.0 – 29.9</div>
            <div className="flex-1 p-4">Overweight</div>
          </div>

          <div className="flex border-t border-white/20">
            <div className="flex-1 p-4">30.0 and Above</div>
            <div className="flex-1 p-4">Obese</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Bmicalculculator;
