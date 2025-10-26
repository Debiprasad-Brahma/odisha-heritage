import React from "react";
import {Link} from "react-router-dom";
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
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/explore" className="hover:text-yellow-400">Explore</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} Odisha Heritage Explorer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
