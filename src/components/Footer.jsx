import React from "react";

const Footer = () => {
  const offices = [
    {
      country: "NIGERIA",
      offices: [
        {
          name: "Head Office",
          address: [
            "12 TAM David West Airport Road,",
            "Port Harcourt,",
            "Rivers State,",
            "Nigeria.",
          ],
        },
      ],
    },
  ];

  const contactInfo = {
    emails: ["info@wavecrestoffshoresupply.com"],
    website: "www.wavecrestoffshore.com",
    phoneLines: {
      NIGERIA: ["+23408107674839"],
    },
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-[5%] lg:px-[10%]">
      <div
        className="flex flex-col lg:flex-row gap-10 w-full mx-auto justify-center"
        style={{
          // backgroundImage: `url(${WorldImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {offices.map((off) => (
          <div
            className={`${
              off.country === "NIGERIA" ? "lg:w-[50%]" : "lg:w-[25%]"
            }`}
            key={off.country}
          >
            <h3
              className={`${
                off.country === "NIGERIA" ? "lg:text-center" : ""
              } text-xl font-bold uppercase`}
            >
              {off.country}
            </h3>
            <div
              className={`${
                off.country === "NIGERIA"
                  ? "grid lg:grid-cols-2"
                  : "flex flex-col"
              }  gap-10 mt-10 gap-y-20`}
            >
              {off.offices.map((office) => (
                <div
                  className={`${off.country === "NIGERIA" ? " " : " "} `}
                  key={office.name}
                >
                  <div>
                    <div className="h-1 w-full bg-[linear-gradient(to_right,theme(colors.blue.500)_25%,theme(colors.gray.800)_25%)]" />
                    <p className="mt-2 text-lg font-semibold">{office.name}</p>
                  </div>

                  <div className="text-xs mt-3 text-gray-400 leading-relaxed">
                    {office.address.map((line, index) => (
                      <span key={index} className="block leading-6">
                        {line}
                      </span>
                    ))}
                  </div>
                  <div className="leading-1.5">
                    {contactInfo.emails.map((email) => (
                      <p
                        className="text-xs text-gray-400 leading-6"
                        key={email}
                      >
                        Email: <span className="text-white">{email}</span>
                      </p>
                    ))}{" "}
                  </div>
                  <p className="text-xs text-gray-400 leading-6">
                    Website:{" "}
                    <span className="text-white">{contactInfo.website}</span>
                  </p>
                </div>
              ))}
              <div>
                <div>
                  <div className="h-1 w-full bg-[linear-gradient(to_right,theme(colors.blue.500)_25%,theme(colors.gray.800)_25%)]" />
                  <p className="mt-2 text-lg font-semibold uppercase">
                    {off.country} call lines
                  </p>
                </div>
                <div className="mt-3">
                  {contactInfo.phoneLines[off.country].map((phone) => (
                    <p className="text-xs text-gray-400 leading-6" key={phone}>
                      Phone: <span className="text-white">{phone}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
