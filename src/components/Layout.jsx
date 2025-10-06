import { Helmet } from "react-helmet-async";
import { BiSearch } from "react-icons/bi";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout({ title, description }) {
  const location = useLocation();
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const rawPath = location.pathname.split("/").filter(Boolean).pop() || "home";

  const pageName = rawPath
    .replace(/-/g, " ")
    .replace(/\band\b/gi, "&")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  // Sample news data - replace with your actual news
  const newsItems = [
    "NUNG appoints Wavecrest Services Ltd as their Buying House for five (5) years Contract",
    "Wavecrest Group expands operations to Ghana with new regional office",
    "New partnership announced with major international energy company",
    "Wavecrest awarded ISO 9001:2015 certification for quality management",
    "Annual report shows 25% growth in offshore services division",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentNewsIndex((prevIndex) =>
          prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>
          {title
            ? `${title} | Wavecrest Offshore Limited`
            : "Wavecrest Offshore Limited"}
        </title>
        <meta
          name="description"
          content={
            description ||
            "Wavecrest Offshore Limited - Creating values through technology"
          }
        />
      </Helmet>

      <div className="bg-blue-800 py-3 px-[5%] lg:px-[10%]">
        <div className="2xl:container mx-auto">
          <p className="text-blue-800 bg-white min-w-1/2 w-fit lg:min-w-1/3 px-5 text-3xl font-bold">
            {pageName}
          </p>
        </div>
      </div>

      <div className="px-[5%] lg:px-[10%] py-10 flex-1">
        <div className="flex flex-col lg:flex-row 2xl:container w-full mx-auto">
          <main className="lg:w-4/6 lg:pr-8">
            <Outlet />
          </main>
          <aside className="mt-10 lg:mt-0 lg:w-2/6">
            <div className="mb-8">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-500 to-gray-800 bg-[length:25%_100%] bg-no-repeat" />
              <h3 className="text-2xl font-semibold mt-3 text-gray-800">
                Search Wavecrest
              </h3>
              <div className="flex items-center border border-gray-300 mt-3 px-3 py-2 rounded-md">
                <div className="flex px-2 text-gray-500">
                  <BiSearch className="text-lg" />
                </div>
                <input
                  type="text"
                  disabled
                  className="focus:outline-none py-1 w-full text-gray-700 placeholder-gray-400"
                  placeholder="to search type and hit enter..."
                />
              </div>
            </div>

            {/* <div className="mt-8">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-500 to-gray-800 bg-[length:25%_100%] bg-no-repeat" />
              <h3 className="text-2xl font-semibold mt-2 text-gray-800">
                Latest News
              </h3>

              <div className="mt-4 bg-white rounded-lg overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      isTransitioning ? "-translate-y-full" : "translate-y-0"
                    }`}
                    key={currentNewsIndex}
                  >
                    <div className="">
                      <p className="text-gray-700 leading-relaxed">
                        {newsItems[currentNewsIndex]}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      isTransitioning ? "translate-y-0" : "translate-y-full"
                    }`}
                  >
                    <div className="p-4">
                      <p className="text-gray-700 leading-relaxed">
                        {newsItems[(currentNewsIndex + 1) % newsItems.length]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-2 py-3">
                  {newsItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentNewsIndex(index);
                          setIsTransitioning(false);
                        }, 500);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentNewsIndex
                          ? "bg-blue-600 scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to news item ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div> */}
          </aside>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .slide-up {
          animation: slideUp 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
