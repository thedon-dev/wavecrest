import React from "react";
import Wellheads from "../assets/wellhead-x-mas-tree.jpg";
import { CheckIcon } from "lucide-react";

const HomeChoose = () => {
  const data = [
    {
      title: "Expertise",
      description:
        "WaveCrest limited specifically handles Pipeline Construction (Land & Swamp, Offshore, Horizontal Directional Drilling-HDD, Thrust Boring), Steel and Metal Fabrication (Storage Tanks, Process Works), Dredging Works, Civil Construction (Piling, Jetty, Bridges), and project financing of Turnkey Projects.",
    },
    {
      title: "Safety",
      description:
        "We ensure safety in every process. Our services and operations meet high safety standards and are widely accepted in the oil & gas and petrochemical industries.",
    },
    {
      title: "Quality",
      description:
        "Quality is always at the core of our business. Our systems and services undergo thorough measurement and quality checks throughout each operation.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="relative">
          <img
            src={Wellheads}
            alt="Wellheads"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">
            Why Choose Us
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Our commitment to excellence, safety, and quality sets us apart in
            the oil and gas industry. Here’s why clients trust us:
          </p>

          <div className="flex flex-col gap-6 mt-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckIcon className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-semibold text-xl text-blue-400 mb-1">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeChoose;
