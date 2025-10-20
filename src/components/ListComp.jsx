import React from "react";

const ListComp = ({
  services,
  showHeading = true,
  headingText = "Inspection Services Provided",
  description = false,
  marginTop = true,
  descriptionText,
}) => {
  return (
    <div className={`${marginTop === true ? "mt-10" : ""} `}>
      {showHeading && (
        <h2 className="text-2xl font-bold mb-3">{headingText}</h2>
      )}
      <p className="text-sm mb-3">{descriptionText}</p>
      <ul className="list-none space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-start text-sm">
            <span className="mr-2">↠</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListComp;
