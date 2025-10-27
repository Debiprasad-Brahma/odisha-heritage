import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("userinfo");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-[#FFF8F0] shadow-md fixed w-full top-0 left-0 z-50 border-b border-[#FCD34D]/50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-[#B91C1C] tracking-wide">
            Odisha<span className="text-[#D97706]"> Heritage</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-[#B91C1C] font-medium">
          <Link to="/" className="hover:text-[#D97706]">Home</Link>
          <Link to="/explore" className="hover:text-[#D97706]">Explore</Link>
          <Link to="/gallery" className="hover:text-[#D97706]">Gallery</Link>
          <Link to="/blog" className="hover:text-[#D97706]">Blog</Link>
          <Link to="/about" className="hover:text-[#D97706]">About</Link>
        </div>

        {/* Login / Logout */}
        <div className="hidden md:block">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-[#D97706] text-white px-4 py-2 rounded-full hover:bg-[#B91C1C] transition-all duration-300 shadow-sm"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-[#B91C1C] text-white px-4 py-2 rounded-full hover:bg-[#D97706] transition-all duration-300 shadow-sm"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-[#B91C1C]" onClick={toggleMenu}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF8F0] border-t border-[#FCD34D] shadow-md">
          <div className="flex flex-col items-center py-3 space-y-3 text-[#B91C1C] font-medium">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/explore" onClick={toggleMenu}>Explore</Link>
            <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
            <Link to="/blog" onClick={toggleMenu}>Blog</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>

            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="bg-[#D97706] text-white px-4 py-2 rounded-full hover:bg-[#B91C1C] transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={toggleMenu}
                className="bg-[#B91C1C] text-white px-4 py-2 rounded-full hover:bg-[#D97706] transition-all duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
