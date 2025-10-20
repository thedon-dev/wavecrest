import React from "react";
import headImg from "../assets/wellhead-x-mas-tree.jpg";
import ListComp from "../components/ListComp";

const Wellheads = () => {
  const list = [
    "Sps electrical wellhead penetrator system and all related Components.",
    "Grease for valves",
    "Wellhead equipment",
    "Christmas tree valve",
    "Blow out preventer",
    "Choke manifolds",
    "Drill Pipe, Drill Collar",
    "Tubing and casing",
    "Drill Bits & Drilling Equipment",
  ];
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div>
        <ListComp services={list} showHeading={false} />
      </div>
    </section>
  );
};

export default Wellheads;
