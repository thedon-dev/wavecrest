import React from "react";
import headImg from "../assets/fittings.jpg";
import ListComp from "../components/ListComp";

const FittingsAndFlanges = () => {
  const list = [
    "Butt-weld Elbows, Tees, Reducers, Caps to ASME B16.9 and 16.28",
    "Forged Fittings to ASME B16.11",
    "Weld Neck, Long Weld Neck, Socket Weld, Blind, Slip On, Orifice Flanges in all pressure ratings, with Raised Face",
    "Flat Face or Ring Type Joint as required to ASME B16.5 & 16.47",
    "Specifications: ASTM, BS, NF, EN/DIN and special customer requirements",
    "Materials: Carbon/Low temperature, Alloy, Stainless, Copper-nickel alloys",
    "Manufacturing process: Forged, Wrought, Welded, and Fabricated.",
  ];
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>
      <div className="mt-3">
        <p className="text-sm text-justify">
          Wavecrest Offshore Limited provides different sizes of
          flanges/fittings from 1/2″ to 60″, ANSI classes 150lbs to 2500lbs
          API6D & API6A and API 2000 to API 20000 in Carbon Steel, Stainless
          Steel, Duplex Steel, Super Duplex Steel, Alloy Steel, Incoloy-Monel,
          Titanium etc.
        </p>
      </div>

      <ListComp services={list} showHeading={false} marginTop={false} />

      <p className="mt-3 text-sm ">
        We provide Equipment & Material specification for various materials
        needed for projects and will provide the necessary processes to support
        contracts formulation and vendor selection.
      </p>
    </section>
  );
};

export default FittingsAndFlanges;
