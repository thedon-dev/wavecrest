import React from "react";
import * as clientLogos from "../assets/clients";

const Clients = () => {
  const images = Object.values(clientLogos);
  return (
    <section>
      <div className="bg-blue-800 py-3 px-[5%] lg:px-[10%]">
        <div className="2xl:container mx-auto">
          <p className="text-blue-800 bg-white min-w-1/2 w-fit lg:min-w-1/3 px-5 text-3xl font-bold">
            Clients
          </p>
        </div>
      </div>
      <div className="px-[5%] lg:px-[10%] py-10">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {images.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="w-full rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
