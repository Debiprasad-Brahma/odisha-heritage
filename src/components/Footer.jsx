import React from "react";
const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-gray-300 py-10 text-center">
      <h2 className="text-xl font-semibold mb-2 text-yellow-400">
        Odisha Heritage Explorer
      </h2>
      <p className="text-sm mb-4">
        Discover the rich cultural legacy and timeless beauty of Odisha.
      </p>
      <div className="space-x-4 mb-4">
        <a href="#" className="hover:text-yellow-400">Home</a>
        <a href="#" className="hover:text-yellow-400">Explore</a>
        <a href="#" className="hover:text-yellow-400">About</a>
        <a href="#" className="hover:text-yellow-400">Contact</a>
      </div>
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} Odisha Heritage Explorer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
