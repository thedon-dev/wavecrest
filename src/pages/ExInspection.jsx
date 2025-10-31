import React from "react";
import pic1 from "../assets/marine-support.jpg";

const ExInspection = () => {
  const data = [
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.05 2C10.99 2 4.5 8.49 4.5 16.55C4.5 24.61 10.99 31.1 19.05 31.1C27.11 31.1 33.6 24.61 33.6 16.55C33.6 8.49 27.11 2 19.05 2ZM19.05 29.7C12.01 29.7 6.3 23.99 6.3 16.95C6.3 9.91 12.01 4.2 19.05 4.2C26.09 4.2 31.8 9.91 31.8 16.95C31.8 23.99 26.09 29.7 19.05 29.7ZM43.2 46L29.7 32.5C31.6 29.95 32.7 26.77 32.7 23.4C32.7 14.9 25.5 7.7 17 7.7C8.5 7.7 1.3 14.9 1.3 23.4C1.3 31.9 8.5 39.1 17 39.1C20.37 39.1 23.55 38 26.1 36.1L39.6 49.6C40.04 50.04 40.69 50.04 41.13 49.6L43.2 47.53C43.64 47.09 43.64 46.44 43.2 46Z"
            fill="#2563EB"
          />
        </svg>
      ),
      title: "Visual Inspection",
      description:
        "To identify defects that are apparent to the eye without needing access to the equipment",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.3796 2.78C38.5369 2.78 45.1498 9.39286 45.1498 17.5502C45.1498 25.7076 38.5369 32.3205 30.3796 32.3205C26.9724 32.3205 23.8364 31.1677 21.3377 29.2304C21.2649 29.1739 21.1926 29.1168 21.1209 29.059C20.7068 28.7255 20.3111 28.37 19.9355 27.9944C19.6035 27.6624 19.2872 27.3146 18.9878 26.9524C18.8899 26.8339 18.7938 26.7138 18.6995 26.5922C16.7622 24.0934 15.6093 20.9575 15.6093 17.5502C15.6093 9.39286 22.2222 2.78 30.3796 2.78Z"
            fill="#2563EB"
          />
        </svg>
      ),
      title: "Close Inspection",
      description:
        "To identify defects that can only be determined when the equipment can be accessed",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.8626 6.5C18.2492 6.5 18.5626 6.8134 18.5626 7.2V23.0407C18.5626 23.4273 18.2492 23.7407 17.8626 23.7407Z"
            fill="#2563EB"
          />
        </svg>
      ),
      title: "Detailed Inspection",
      description:
        "To identify defects that can only be detected when the enclosure is opened",
    },
  ];

  return (
    <div className="bg-white">
      <main className="flex flex-col justify-center items-center mt-10 px-4 md:px-8">
        {/* Hero Section */}
        <section className="w-full md:w-4/5 lg:w-3/5">
          <p className="text-sm text-blue-600 mb-4">INSPECTION SERVICES</p>
          <h1 className="text-3xl md:text-5xl font-bold text-left">
            Ex Inspection
          </h1>
          <p className="text-lg md:text-xl text-blue-600 pt-4 mb-2">
            Securing a hazard-free work environment
          </p>
          <p className="text-base md:text-lg text-gray-600 pt-4 mb-2 leading-relaxed">
            At WaveCrest Limited, we provide a full range of Ex inspection
            services to various industries, including oil and gas as well as
            marine, to ensure full compliance with all relevant safety
            regulations, best practices and international standards. With our
            extensive experience and team of highly trained specialists, we
            carry out well-tailored inspection strategies that are proven to
            reduce workplace electrical hazards.
          </p>
        </section>

        {/* Hero Image */}
        <img
          src={pic1}
          alt="Lifting equipment inspection"
          className="rounded-2xl w-full md:w-4/5 lg:w-3/5 pt-8 mb-8 shadow-lg object-cover"
        />

        {/* Inspection Cards Section */}
        <section className="w-full md:w-4/5 lg:w-3/5 py-8">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            Ex inspection services
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
            Optimise your Ex equipment’s integrity, safety and reliability with
            our methodical inspection and maintenance services directed toward
            achieving flawless operations with minimal to zero unscheduled
            downtime.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            We endeavour to assist our clients in improving safety during
            hazardous electrical installations through:
          </p>

          {/* Responsive Card Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-start hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{item.svg}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                  Read More
                </button>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-5xl sm:text-3xl font-bold">
              Why invest in Ex inspection?
            </h1>
            <ul className="list-disc list-inside text-lg text-gray-600 pt-6 mb-2">
              <li>
                Optimise inspection grade or frequency and maintain the
                integrity of Ex assets
              </li>
              <li>
                Enable compliance with pertinent regulations and performance
                standards
              </li>
              <li>
                Reduce human error in maintenance operations and intrusive
                inspections
              </li>
              <li>Improve equipment performance and service life</li>
              <li>
                Ensure implementation of effective risk-based Ex inspection
                regime
              </li>
              <li>Eliminate unnecessary expenses</li>
              <li>
                Improve knowledge sharing and implementation of best practices
              </li>
            </ul>
          </div>

          <p className="text-base md:text-lg text-gray-600 pt-8 leading-relaxed">
            In addition, we mobilise test equipment on a pallet which we rig up
            in the mechanical workshop, instead of a big container, thus saving
            our clients costs and space onboard the rig.
          </p>

          <p className="text-base md:text-lg text-gray-600 pt-6 leading-relaxed">
            At the end of the project, we upload all documents to Bridge, which
            our clients can easily access and review.
          </p>

          {/* Contact Section */}
          <section className="py-12 bg-blue-200 mt-8 rounded-md text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have any questions?
            </h2>
            <a
              href="/contact"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
            >
              Contact us
            </a>
          </section>
        </section>
      </main>
    </div>
  );
};

export default ExInspection;
