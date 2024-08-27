import React from "react";
import Image from "next/image";
import a2svLogo from "../images/a2svLogo.png";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 border-b">
      <div className="flex items-center">
        <Image src={a2svLogo} alt="A2SV Logo" className="h-10" />
      </div>
      <nav className="flex space-x-16">
        <a href="/" className="text-gray-800 font-semibold hover:text-blue-600">
          Home
        </a>
        <a
          href="/teams"
          className="text-gray-800 font-semibold hover:text-blue-600"
        >
          Teams
        </a>
        <a
          href="/success-stories"
          className="text-gray-800 font-semibold hover:text-blue-600"
        >
          Success Stories
        </a>
        <a
          href="/about-us"
          className="text-gray-800 font-semibold hover:text-blue-600"
        >
          About Us
        </a>
        <a
          href="/blogs"
          className="text-gray-800 font-semibold hover:text-blue-600"
        >
          Blogs
        </a>
        <a
          href="/get-involved"
          className="text-gray-800 font-semibold hover:text-blue-600"
        >
          Get Involved
        </a>
      </nav>
      <div className="flex gap-2">
        <button className="px-4 py-2  rounded hover:text-blue-700">Login</button>
        <button className="px-4 py-2 bg-[#264FAD] text-white rounded-lg hover:bg-blue-700">
          Donate
        </button>
      </div>
    </header>
  );
};

export default Header;
