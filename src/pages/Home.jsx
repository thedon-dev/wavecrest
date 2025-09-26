import React from "react";
import HeroSection from "../sections/Home/Hero";
import vision from "../assets/Home/vision-statement.png";
import mission from "../assets/Home/mission-statement.png";
import news from "../assets/Home/News-and-updates.png";

const Home = () => {
  const statements = [
    {
      heading: "VISION STATEMENT",
      description:
        "To develop a dynamic and successful company that provides innovative and quality service delivery in Engineering and Procurement within the African oil and gas sector.",
      image: vision,
    },
    {
      heading: "MISSION STATEMENT",
      description:
        "To develop exceptional value to our clients through excellence in engineering, procurement and project management, while prioritizing environmental protection.",
      image: mission,
    },
  ];

  const newsItems = [
    "GE worldwide (Vetco Grey) appoints Dovewell Oilfield Services as their buying housing for 4 years contract.",
    "New partnership with major international energy company announced.",
    "Dovewell expands operations to three new African countries.",
  ];

  return (
    <div>
      <HeroSection />

      <section className="py-16 px-[5%] lg:px-[10%] bg-gray-50">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {statements.map((statement, index) => (
              <div
                key={index}
                className="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:bg-blue-500"
              >
                <div className=" inset-0 overflow-hidden">
                  <img
                    src={statement.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>

                <div className="relative z-10 p-8 h-64 flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {statement.heading}
                  </h3>
                  <p className="leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {statement.description}
                  </p>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
              </div>
            ))}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-500">
                NEWS & UPDATE
              </h3>
              <div className="space-y-4">
                {newsItems.map((news, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 py-4 rounded-lg transition-all duration-300 hover:bg-blue-50 cursor-pointer"
                  >
                    <div className="ml-2 w-3 h-3 bg-blue-500 rounded-full mt-2 group-hover:bg-blue-600 transition-colors duration-300"></div>
                    <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {news}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
