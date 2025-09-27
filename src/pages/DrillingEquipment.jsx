import React from "react";
import headImg from "../assets/OCTG-Line-PIPE.jpg";

const DrillingEquipment = () => {
  const list = [
    "Carbon steel/Carbon-Manganese (ASTM A206) Low temperature carbon steel (ASTM A33)",
    "Alloy steel (ASTM A335)",
    "Stainless steels (ASTM A312) Line pipes (API 5L)",
    "High yields line pipes for sour/non-sour applications (API 5L)",
    "Welded pipes (ERW, HFI, DSAW)",
    "Carbon steels/Carbon-Manganese (ASTM A672) Low temperature carbon steels (ASTM A671)",
    "Alloy steels (ASTM A691)",
    "Stainless steels (ASTM A213/A358)",
    "Line pipes (API 5L)",
    "High yield line pipes for sour/non-sour applications (API 5L) structural steels",
    "Seamless and welded tubular",
    "Cans and plates",
    "Shaped plates with prepared edges",
    "Sections",
    "Wide flange beams",
    "Complete piles",
    "Pile sleeves",
    "Conductor pipes",
    "Pre-fabricated components",
  ];
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>
      <div className="mt-5">
        <ul className="list-disc text-sm space-y-2">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DrillingEquipment;
