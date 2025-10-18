import React from "react";
import headImg from "../assets/Pumps02.jpg";
import ListComp from "../components/ListComp";

const RotatingEquipments = () => {
  const list = [
    "Fire water pumps",
    "High speed reciprocating pumps",
    "High-speed centrifugal pumps",
    "Dosing pumps",
    "High speed compressorsv",
  ];
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div className="mt-5 text-sm">
        <p>
          <strong>WaveCrest Offshore Limited</strong> is in the business of
          procuring, marketing and servicing pumps of quality brand names. The
          company’s product line includes: Single stage liquid ring vacuum
          pumps, Two-stage liquidizing vacuum pumps, Liquid ring compressors,
          Rotary vane vacuum pumps, single stage centrifugal pumps, multi-stage
          centrifugal pumps, multistage self-priming pumps, full engineered
          vacuum systems and compressors.
        </p>
      </div>

      <ListComp services={list} showHeading={false} />
    </section>
  );
};

export default RotatingEquipments;
