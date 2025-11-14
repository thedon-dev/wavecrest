import React from "react";
import HomeAboutpic from "../assets/HomeAbout_pic.jpg";

const HomeAbout = () => {
  const data = [
    {
      title: "Quality Policy",
      paragraph:
        "Excellence and Quality is at the center of everything we do and guides us to achieve a reputation for integrity as well as competence.",
      bg: "bg-blue-100",
    },
    {
      title: "HSSE Policy",
      paragraph:
        "Wavecrest offshore Ltd, consistently conducts its businesses in a manner to ensure that there are no injuries to people or harm to our environment.",
      bg: "bg-green-100",
    },
    {
      title: "Our Team",
      paragraph:
        "Our team is made up of professionals who have significant active years of industry experience.",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-10 py-16 px-[5%] lg:px-[10%] bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Left Section */}
      <div className="flex-1 shadow-xl rounded-lg p-6 grid grid-cols-1 gap-6 items-center bg-blue-50">
        <img
          src={HomeAboutpic}
          alt="Home About"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />

        <div>
          <h1 className="font-bold text-3xl md:text-4xl mb-4 text-blue-900">
            About Us
          </h1>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Wavecrest offshore Ltd is a Nigerian indigenous oil and gas
            engineering and construction service company. We pool the expertise
            of experienced engineers and technicians to provide efficient
            services within the Oil, Gas, and Engineering industry. WaveCrest
            Limited offers services in Nigeria and aims to expand to the West
            African sub-region.
          </p>
          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg mt-6 text-base md:text-lg font-medium hover:bg-blue-800 transition duration-300">
            Read more about us
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} mb-8 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300`}
          >
            <h2 className="font-semibold  text-2xl mb-2 text-gray-900">
              {item.title}
            </h2>
            <span className="block w-[80%] border-b-2 border-dotted p-2 mb-2 border-white"></span>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAbout;
