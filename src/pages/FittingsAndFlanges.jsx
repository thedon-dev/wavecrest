import React from "react";
import headImg from "../assets/fittings.jpg";

const FittingsAndFlanges = () => {
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>
      <div>
        <p className="text-sm text-justify">
          Wavecrest Offshore Limited provides different sizes of
          flanges/fittings from 1/2″ to 60″, ANSI classes 150lbs to 2500lbs
          API6D & API6A and API 2000 to API 20000 in Carbon Steel, Stainless
          Steel, Duplex Steel, Super Duplex Steel, Alloy Steel, Incoloy-Monel,
          Titanium etc.
        </p>
      </div>
    </section>
  );
};

export default FittingsAndFlanges;
