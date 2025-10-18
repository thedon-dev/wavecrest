import React, { useState, useEffect } from "react";
import Logo from "../assets/logolandscape.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Company",
      dropdown: [
        {
          name: "About Us",
          link: "/company/about-us",
        },
        {
          name: "Corporate Social Responsibility",
          link: "/company/corporate-social-responsibility",
        },
        {
          name: "Corporate Group",
          subLinks: [
            {
              name: "i-Flow Energy Limited",
              link: "/company/corporate-group/i-flow-energy",
            },
            {
              name: "DeepTek Offshore Marine Services Limited",
              link: "/company/corporate-group/deeptek-offshore",
            },
            {
              name: "Dominion Mining Company Limited",
              link: "/company/corporate-group/dominion-mining",
            },
            {
              name: "Pacific Exploration Energy Limited",
              link: "/company/corporate-group/pacific-exploration",
            },
            {
              name: "Dovewell Exploration and Production Limited",
              link: "/company/corporate-group/dovewell-exploration",
            },
          ],
        },
        {
          name: "HSE/Quality Management",
          link: "/company/hse-quality-management",
        },
        {
          name: "Project References",
          link: "",
        },
        {
          name: "Corporate Awards",
          link: "/company/corporate-awards",
        },
        {
          name: "Corporate Certifications",
          link: "/company/corporate-certifications",
        },
        {
          name: "Company Profile Download",
          link: "",
        },
      ],
    },
    {
      name: "Services",
      dropdown: [
        {
          name: "Inspection Services",
          link: "/services/inspection-services",
        },
        {
          name: "Rope Access",
          link: "/services/rope-access",
        },
        {
          name: "Process Control & Instrumentation",
          link: "/services/process-control-and-instrumentation",
        },
        {
          name: "Surface Protection",
          link: "/services/surface-protection",
        },
        {
          name: "Onshore and Offshore Crane Maintenance",
          link: "/services/onshore-and-offshore-crane-maintenance",
        },
        {
          name: "Marine Support, Tank & Vessel Cleaning Services",
          link: "/services/marine-support-tank-and-vessel-cleaning-services",
        },
        {
          name: "Overhaul, Installation and Commissioning",
          link: "/services/overhaul-installation-and-commissioning",
        },
        {
          name: "Procurement Services & Contractual Support",
          link: "/services/procurement-services-and-contractual-support",
        },
        {
          name: "EPCI and EPCM",
          link: "/services/epci-and-epcm",
        },
        {
          name: "Intelligent Pigging and Pipeline Services",
          link: "/services/intelligent-pigging-and-pipeline-services",
        },
      ],
    },
    {
      name: "Products",
      dropdown: [
        {
          name: "Valves",
          link: "/products/valves",
        },
        {
          name: "OCTG, Seamless Line Pipes & Drilling Equipment",
          link: "/products/seamless-line-pipes-and-drilling-equipment",
        },
        {
          name: "Fittings & Flanges",
          link: "/products/fittings-and-flanges",
        },
        {
          name: "Instrumentation & Flow Control Products",
          link: "/products/instrumentation-and-flow-control-products",
        },
        {
          name: "Rotating Equipment",
          link: "/products/rotating-equipment",
        },
        {
          name: "Wellheads Christmas Trees & Accessories",
          link: "/products/wellheads-christmas-trees-accessories",
        },
      ],
    },
    {
      name: "Partners",
      link: "/partners",
    },
    {
      name: "Clients",
      link: "/clients",
    },
    {
      name: "Careers",
      link: "/careers",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
      setOpenSubDropdown(null);
    }
  };

  const toggleSubDropdown = (subDropdownName) => {
    if (openSubDropdown === subDropdownName) {
      setOpenSubDropdown(null);
    } else {
      setOpenSubDropdown(subDropdownName);
    }
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    closeAllDropdowns();
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="px-[5%] bg-white lg:px-[10%] py-5 sticky top-0 left-0 w-full z-30 shadow-sm">
      <div className="2xl:container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" onClick={closeMobileMenu}>
            <img src={Logo} alt="Dovewell Group" className="w-[12rem]" />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 dropdown-container">
          {links.map((link) => (
            <div key={link.name} className="relative">
              {link.link && !link.dropdown ? (
                <Link
                  to={link.link}
                  className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-[15px]"
                  onClick={closeAllDropdowns}
                >
                  {link.name}
                </Link>
              ) : link.dropdown ? (
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-[15px] focus:outline-none"
                >
                  {link.name}
                  <IoIosArrowDown
                    className={`text-xs transition-transform duration-200 ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  to={link.link}
                  className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-[15px]"
                  onClick={closeAllDropdowns}
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && openDropdown === link.name && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-md border border-gray-100">
                  {link.dropdown.map((dropdownItem) => (
                    <div key={dropdownItem.name} className="relative">
                      {dropdownItem.subLinks ? (
                        <>
                          <button
                            onClick={() => toggleSubDropdown(dropdownItem.name)}
                            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors duration-200 focus:outline-none"
                          >
                            <span className="text-[14px]">
                              {dropdownItem.name}
                            </span>
                            <IoIosArrowForward
                              className={`text-gray-400 transition-transform duration-200 ${
                                openSubDropdown === dropdownItem.name
                                  ? "rotate-90"
                                  : ""
                              }`}
                            />
                          </button>

                          {openSubDropdown === dropdownItem.name && (
                            <div className="absolute top-0 left-full ml-1 w-64 bg-white shadow-xl rounded-md border border-gray-100 z-40">
                              {dropdownItem.subLinks.map((subLink) => (
                                <Link
                                  key={subLink.name}
                                  to={subLink.link}
                                  className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 last:border-b-0 transition-colors duration-200"
                                  onClick={closeAllDropdowns}
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={dropdownItem.link}
                          className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors duration-200"
                          onClick={closeAllDropdowns}
                        >
                          {dropdownItem.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 dropdown-container">
          {links.map((link) => (
            <div key={link.name} className="py-2 border-b border-gray-200">
              {link.link && !link.dropdown ? (
                <Link
                  to={link.link}
                  className="block text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              ) : link.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="flex items-center justify-between w-full text-gray-800 hover:text-blue-800 transition-colors duration-200 font-medium focus:outline-none"
                  >
                    {link.name}
                    <IoIosArrowDown
                      className={`text-xs transition-transform duration-200 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.name && (
                    <div className="mt-2 pl-4 divide-y divide-gray-200">
                      {link.dropdown.map((dropdownItem) => (
                        <div key={dropdownItem.name} className="py-1">
                          {dropdownItem.subLinks ? (
                            <div>
                              <button
                                onClick={() =>
                                  toggleSubDropdown(dropdownItem.name)
                                }
                                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium focus:outline-none"
                              >
                                {dropdownItem.name}
                                <IoIosArrowForward
                                  className={`text-xs transition-transform duration-200 ${
                                    openSubDropdown === dropdownItem.name
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              </button>
                              {openSubDropdown === dropdownItem.name && (
                                <div className="mt-2 pl-4 divide-y divide-gray-200">
                                  {dropdownItem.subLinks.map((subLink) => (
                                    <Link
                                      key={subLink.name}
                                      to={subLink.link}
                                      className="block py-1 text-gray-600 hover:text-blue-800 transition-colors duration-200"
                                      onClick={closeMobileMenu}
                                    >
                                      {subLink.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              to={dropdownItem.link}
                              className="block text-gray-700 hover:text-blue-800 transition-colors duration-200"
                              onClick={closeMobileMenu}
                            >
                              {dropdownItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.link}
                  className="block text-gray-800 hover:text-blue-800 transition-colors duration-200 font-medium"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
