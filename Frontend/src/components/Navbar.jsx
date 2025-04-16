/* eslint-disable react/prop-types */
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close-light.svg";
import { useState } from "react";
import NewsCategories from "./NewsCategories";

const Navbar = ({ setId, isDark, setLoading }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`p-4 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-blue-400 text-white"
      }`}
    >
      {/* Hamburger Icon */}
      <div className="hidden items-center justify-between font-medium max-md:flex">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`focus:outline-none border-2 rounded-xl p-2 ${
            isDark ? "border-gray-700" : "border-white"
          }`}
        >
          <img
            src={!isMenuOpen ? hamburger : close}
            alt="News category icon"
            width={24}
            height={24}
          />
        </button>
        {!isMenuOpen ? (
          <p className="text-2xl font-mono font-bold absolute left-20">
            Categories
          </p>
        ) : null}
      </div>

      {/* Navbar Links */}
      <div
        className={`md:flex ${
          isMenuOpen ? "block" : "hidden"
        } w-full pt-2 justify-center`}
      >
        <div className="flex flex-wrap gap-2 justify-end">
          <NewsCategories setId={setId} setLoading={setLoading}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
