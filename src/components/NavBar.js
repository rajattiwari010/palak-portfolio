import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Journey",
    },
    {
      id: 4,
      link: "Project",
    },
    {
      id: 5,
      link: "Team",
    },
    {
      id: 6,
      link: "Contact",
    },
  ];

  const leftLinks = links.slice(0, 3);
  const rightLinks = links.slice(3);

  return (
    <div className="z-50 flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div className="flex items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer mr-4 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <h1 className="text-5xl font-signature">Creative Junction</h1>
      </div>

      {nav && (
        <div className="absolute top-0 right-0 h-screen w-56 bg-gray-800 text-white flex flex-col justify-center items-center">
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              className="py-4 text-xl cursor-pointer"
              onClick={() => setNav(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      )}

      <ul className="hidden md:flex items-center">
        {leftLinks.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:border-b-4 hover:border-blue-500 hover:scale-105 hover:duration-200 ease-in-out"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="hidden md:flex items-center">
        {rightLinks.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:border-b-4 hover:border-blue-500 hover:scale-105 hover:duration-200 ease-in-out"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
