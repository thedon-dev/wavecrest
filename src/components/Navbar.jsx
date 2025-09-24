import React, { useState } from "react";
import Logo from "../assets/logolandscape.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Our Businesses",
      dropdown: [
        {
          name: "Upstream",
          subLinks: [
            {
              name: "Exploration",
              link: "/our-businesses/upstream/exploration",
            },
            { name: "Production", link: "/our-businesses/upstream/production" },
            {
              name: "Field Development",
              link: "/our-businesses/upstream/field-development",
            },
          ],
        },
        {
          name: "Midstream",
          subLinks: [
            {
              name: "Transportation",
              link: "/our-businesses/midstream/transportation",
            },
            { name: "Storage", link: "/our-businesses/midstream/storage" },
            { name: "Terminals", link: "/our-businesses/midstream/terminals" },
          ],
        },
        {
          name: "Downstream",
          subLinks: [
            { name: "Refining", link: "/our-businesses/downstream/refining" },
            { name: "Marketing", link: "/our-businesses/downstream/marketing" },
            {
              name: "Distribution",
              link: "/our-businesses/downstream/distribution",
            },
          ],
        },
      ],
    },
    {
      name: "HSEQ",
      dropdown: [
        {
          name: "Health & Safety",
          subLinks: [
            { name: "Policies", link: "/hseq/health-safety/policies" },
            { name: "Training", link: "/hseq/health-safety/training" },
            {
              name: "Incident Reporting",
              link: "/hseq/health-safety/incident-reporting",
            },
          ],
        },
        {
          name: "Environment",
          subLinks: [
            {
              name: "Sustainability",
              link: "/hseq/environment/sustainability",
            },
            { name: "Compliance", link: "/hseq/environment/compliance" },
          ],
        },
        {
          name: "Quality",
          subLinks: [
            { name: "Standards", link: "/hseq/quality/standards" },
            { name: "Certifications", link: "/hseq/quality/certifications" },
          ],
        },
      ],
    },
    {
      name: "Careers",
      link: "/careers",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

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

  // Close dropdowns when clicking outside
  React.useEffect(() => {
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
          <Link to="/" onClick={closeAllDropdowns}>
            <img src={Logo} alt="Dovewell Group" className="w-[12rem]" />
          </Link>
        </div>
        <div className="flex items-center gap-10 dropdown-container">
          {links.map((link) => (
            <div key={link.name} className="relative">
              {link.link ? (
                <Link
                  to={link.link}
                  className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition-colors duration-200 font-medium"
                  onClick={closeAllDropdowns}
                >
                  {link.name}
                  {link.dropdown && <IoIosArrowDown className="text-sm" />}
                </Link>
              ) : (
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition-colors duration-200 font-medium focus:outline-none"
                >
                  {link.name}
                  {link.dropdown && (
                    <IoIosArrowDown
                      className={`text-sm transition-transform duration-200 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
              )}

              {link.dropdown && openDropdown === link.name && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-md border border-gray-100">
                  {link.dropdown.map((dropdownItem) => (
                    <div key={dropdownItem.name} className="relative">
                      <button
                        onClick={() => toggleSubDropdown(dropdownItem.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 last:border-b-0 transition-colors duration-200 focus:outline-none"
                      >
                        <span>{dropdownItem.name}</span>
                        {dropdownItem.subLinks && (
                          <IoIosArrowForward
                            className={`text-gray-400 transition-transform duration-200 ${
                              openSubDropdown === dropdownItem.name
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        )}
                      </button>

                      {dropdownItem.subLinks &&
                        openSubDropdown === dropdownItem.name && (
                          <div className="absolute top-0 left-full ml-1 w-56 bg-white shadow-xl rounded-md border border-gray-100 z-40">
                            {dropdownItem.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                to={subLink.link}
                                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 last:border-b-0 transition-colors duration-200"
                                onClick={closeAllDropdowns}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
