import React from "react";
import headImg from "../assets/Corporate-social.jpg";

// Dovewell Oilfield Services Limited will extend its support to seminars, lectures, workshops, and programs organized by corporate bodies to promote awareness and excellence in professionalism within their respective fields.

// Educational Infrastructure:

// We are committed to providing long-term support for educational development, including building renovations, furnishing classroom blocks, technical workshops, teachers’ accommodation, and provision of computer equipment and electric power generators to educational institutions as needed.

// Arts and Culture:

// Reflecting our reverence for Nigerian values, customs, and traditions, we intend to sponsor community festivals and other cultural activities, thereby fostering the preservation and celebration of local heritage.

// Community Infrastructure:

// We will contribute to the development of community infrastructure, including borehole drilling, establishment of libraries, provision of free healthcare services, and setting up of computer centres, all aimed at supporting the well-being and empowerment of youth in our operating communities.

const CorperateSocial = () => {
  const initiatives = [
    {
      heading: "Support for Professional Organizations:",
      description:
        "Dovewell Oilfield Services Limited will extend its support to seminars, lectures, workshops, and programs organized by corporate bodies to promote awareness and excellence in professionalism within their respective fields.",
    },
    {
      heading: "Educational Infrastructure:",
      description:
        "We are committed to providing long-term support for educational development, including building renovations, furnishing classroom blocks, technical workshops, teachers’ accommodation, and provision of computer equipment and electric power generators to educational institutions as needed.",
    },
    {
      heading: "Art and Culture: ",
      description:
        "Reflecting our reverence for Nigerian values, customs, and traditions, we intend to sponsor community festivals and other cultural activities, thereby fostering the preservation and celebration of local heritage.",
    },
    {
      heading: "Community Infrastructure:",
      description:
        "We will contribute to the development of community infrastructure, including borehole drilling, establishment of libraries, provision of free healthcare services, and setting up of computer centres, all aimed at supporting the well-being and empowerment of youth in our operating communities.",
    },
  ];
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div className="flex flex-col gap-10 text-sm mt-10">
        <p>
          In our commitment to fostering a more cohesive and vibrant society,
          our social responsibility initiatives unfold across various phases and
          levels. Dovewell Oilfield Services Limited is poised to enhance its
          production and services by acquiring under-developed oil blocks in
          established locations, leveraging advanced and proven technologies in
          the near future.
        </p>
        <p>
          Simultaneously, we remain steadfast in our dedication to social
          responsibility, particularly toward underprivileged individuals and
          communities. We pledge to allocate a percentage of our earnings to
          facilitate the development of infrastructure and other social
          amenities for the benefit of the masses.
        </p>
      </div>

      <div className="">
        <h1 className="text-4xl font-bold my-10">
          Our proposed support initiatives encompass:
        </h1>
        {initiatives.map((init, index) => (
          <div key={index} className="text-sm mt-5">
            <h3 className="text-blue-500 font-semibold">{init.heading}</h3>
            <p className="text-justify mt-2">{init.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CorperateSocial;
