import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-[#18151F] border-b border-gray-800 px-6 py-4 flex justify-between items-center top-0 left-0 z-50 font-sans">
      <nav className="flex gap-6 text-sm text-gray-400 px-5">
        <a href="#" className="">
          Home
        </a>
        <a href="#" className="">
          Features
        </a>
        <a href="#" className="">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
