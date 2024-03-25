'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      url: "/"
    },
    {
      id: 2,
      link: "notes",
      url: "notes"
    }
  ]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <Link className="link-underline link-underline-black" href="" target="_blank" rel="noreferrer">
            myNotes
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map( ({id, link, url}) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-white duration-200 link-underline">
              <Link href={url}>{link}</Link>
            </li>
        ))}
      </ul>

      <div 
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map( ({id, link, url}) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl">
                <Link href={url}>{link}</Link>
              </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default Navbar;