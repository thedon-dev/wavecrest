import React from "react";
import img1 from "../assets/servicePic_1.jpg";
import img2 from "../assets/servicePic_2.webp";
import img3 from "../assets/servicePic_3.gif";
import img4 from "../assets/servicePic_4.jpg";
import img5 from "../assets/servicePic_5.jpg";
import img6 from "../assets/servicePic_6.jpg";

const CardsSection = () => {
  // 🧠 Card Data
  const cards = [
    {
      image: img1,
      title: "Pipeline Engineering",
      description:
        "We specialize in pipeline design, construction, and maintenance for both onshore and offshore operations.",
    },
    {
      image: img2,
      title: "Civil Construction",
      description:
        "From bridges to jetty projects, we handle large-scale civil engineering works with precision and safety.",
    },
    {
      image: img3,
      title: "Steel Fabrication",
      description:
        "Our steel and metal fabrication services ensure quality and durability for every project we undertake.",
    },
    {
      image: img4,
      title: "Health & Safety",
      description:
        "We maintain a strong commitment to safety standards, ensuring a hazard-free working environment.",
    },
    {
      image: img5,
      title: "Innovation",
      description:
        "We adopt cutting-edge technology to improve operational efficiency and deliver high-quality solutions.",
    },
    {
      image: img6,
      title: "Expert Team",
      description:
        "Our engineers and professionals bring decades of combined experience in energy and infrastructure sectors.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mb-2 mx-auto">
            Intenco provides the following services in the oil and gas industry;
            project management, engineering, procurement,
            construction/fabrication, installation, commissioning, maintenance
            and consultancy services.
          </p>
          <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto">
            We deliver high-quality solutions across multiple engineering
            disciplines with a strong focus on safety, efficiency, and
            innovation.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[250px]">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
