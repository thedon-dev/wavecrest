import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const rawPath = location.pathname.split("/").filter(Boolean).pop() || "home";

  const pageName = rawPath
    .replace(/-/g, " ")
    .replace(/\band\b/gi, "&")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return (
    <section className="">
      <div className="bg-blue-800 py-3 px-[5%] lg:px-[10%]">
        <div className="2xl:container mx-auto">
          <p className="text-blue-800 bg-white min-w-1/2 w-fit lg:min-w-1/3 px-5 text-3xl font-bold">
            {pageName}
          </p>
        </div>
      </div>
      <div className="2xl:container mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.218489242427!2d3.391422!3d6.494906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c5f3f3b4b3b%3A0x3b4b3b4b3b4b3b4b!2sWavecrest%20College%20of%20Hospitality!5e0!3m2!1sen!2sng!4v1623756789012!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
      <div className="px-[5%] lg:px-[10%] py-20">
        <div className="2xl:container mx-auto px-4">
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-500 to-gray-800 bg-[length:25%_100%] bg-no-repeat" />
          <h1 className="text-4xl font-semibold my-5">Contact Us</h1>
          <p className="text-left">
            Dovewell Oilfield Services Limited is always open for communication
            on whatever questions you may have. So in case you do have questions
            (as we assume) just go ahead and complete the form below to let us
            know.
          </p>
          <h4 className="text-sm font-semibold mt-3">
            Usually we respond within 24 hours...
          </h4>
          <div className="mt-5">
            <div>
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-500 to-gray-800 bg-[length:25%_100%] bg-no-repeat" />
              <h2 className="text-2xl font-semibold mb-6 mt-5">
                Send us a message
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 resize-none py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
