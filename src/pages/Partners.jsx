import React from "react";
import Alatas from "../assets/partners/ALATAS.jpg";
import Alco from "../assets/partners/Alco.png";
import Butech from "../assets/partners/BUTECH-MILTON.jpg";
import Claval from "../assets/partners/CLA-VAL.jpg";
import Cutech from "../assets/partners/CUTECH.jpg";
import EnFab from "../assets/partners/EN-FAB.jpg";
import Haskel from "../assets/partners/HASKEL.jpg";
import Markleen from "../assets/partners/MARKLEEN.jpg";
import Nov from "../assets/partners/NOV.jpg";
import Peerless from "../assets/partners/PEERLESS.jpg";
import Prominent from "../assets/partners/PROMINENT.jpg";
import Salz from "../assets/partners/SALZ.jpg";
import Yellotec from "../assets/partners/YELLOTEC.jpg";
import Yz from "../assets/partners/YZ.jpg";

const Partners = () => {
  const images = [
    Alatas,
    Alco,
    Butech,
    Claval,
    Cutech,
    EnFab,
    Haskel,
    Markleen,
    Nov,
    Peerless,
    Prominent,
    Salz,
    Yellotec,
    Yz,
  ];
  return (
    <section className="">
      <div className="bg-blue-800 py-3 px-[5%] lg:px-[10%]">
        <div className="2xl:container mx-auto">
          <p className="text-blue-800 bg-white min-w-1/2 w-fit lg:min-w-1/3 px-5 text-3xl font-bold">
            Partners
          </p>
          <p className="text-xs text-white mt-2">
            Ensuring excellence in service delivery...
          </p>
        </div>
      </div>
      <div className="px-[5%] lg:px-[10%] py-10">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
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

export default Partners;
