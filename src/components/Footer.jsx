import React from "react";
import WorldImage from "../assets/worldImage.jpeg";

const Footer = () => {
  const offices = [
    {
      country: "NIGERIA",
      offices: [
        {
          name: "Lagos Office",
          address: [
            "Plot 21B Akwuzu Street,",
            "Lekki Phase I, Lagos,",
            "Lagos State,",
            "Nigeria.",
          ],
        },
        {
          name: "Port Harcourt Office",
          address: [
            "Plot 13 JC International Street,",
            "New Trans-Amadi Industrial Layout,",
            "Off Peter Odili Road,",
            "Port Harcourt,",
            "Rivers State,",
            "Nigeria.",
          ],
        },
        {
          name: "Yard Location",
          address: [
            "Plot 154 New Trans-Amadi Industrial Layout,",
            "Off ACM/JOE Eboje Road,",
            "Port Harcourt,",
            "Rivers State,",
            "Nigeria.",
          ],
        },
      ],
    },
    {
      country: "ANGOLA",
      offices: [
        {
          name: "Angola Office",
          address: ["Rua Cmdt N'zaji no. 90 – Alvalade Luanda,", "Angola."],
        },
      ],
    },
    {
      country: "GHANA",
      offices: [
        {
          name: "Ghana Office",
          address: [
            "6th and 7th Floor, Atlantic Tower,",
            "Airport City, Accra, Ghana.",
          ],
        },
      ],
    },
  ];

  const contactInfo = {
    emails: ["info@dovewellgroup.com", "request@dovewellgroup.com"],
    website: "www.dovewellgroup.com",
    phoneLines: {
      NIGERIA: [
        "+234-(01)-631-1665",
        "+234-(0)81-1598-2622",
        "+234-(0)81-8472-4384",
        "+234-(0)81-1245-8119",
      ],
      ANGOLA: ["+244-222-043-327"],
      GHANA: ["+233(0)596-921-068"],
    },
  };

  const Nigeria = offices[0];
  const ANGOLA = offices[1];
  const GHANA = offices[2];

  return (
    <footer className="bg-gray-900 text-white py-12 px-[5%] lg:px-[10%]">
      <div
        className="flex flex-col lg:flex-row gap-10 w-full 2xl:container mx-auto"
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
                      <p className="text-xs text-gray-400 leading-6">
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
