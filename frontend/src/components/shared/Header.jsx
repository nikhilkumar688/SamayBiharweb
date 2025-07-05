import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="shadow-lg sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto p-4">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="/logo.svg"
            alt="समय Bihar Logo"
            className="h-10 sm:h-14 w-auto object-contain"
          />
        </Link>

        {/* Clock */}
        <div className="text-sm sm:text-base text-slate-700 text-center font-medium hidden sm:block">
          <p>{formattedDate}</p>
          <p>{formattedTime}</p>
        </div>

        {/* Search */}
        <form className="p-3 bg-slate-100 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none bg-transparent w-24 sm:w-64"
          />
          <button type="submit">
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        {/* Navigation */}
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/news"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              News Articles
            </li>
          </Link>
        </ul>

        {/* Sign In */}
        <Link to={"/sign-in"}>
          <Button>Sign In</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
