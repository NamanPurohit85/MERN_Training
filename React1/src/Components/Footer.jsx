import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#18151F] border-t border-gray-800 px-6 py-4 flex flex-col sm:flex-row justify-between items-center bottom-0 left-0 z-50 text-xs text-gray-500 font-sans gap-2">
      <div>2026. All rights reserved.</div>
      <div className="flex gap-4">
        <a href="#" className="">
          Privacy Policy
        </a>
        <a href="#" className="">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
