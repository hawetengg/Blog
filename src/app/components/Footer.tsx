import React from "react";
import Image from "next/image";
import imgg from "../images/rafiki - Copy.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-8 border-t">
      <div className="flex justify-between">
        <div className="flex items-center mr-8">
          <Image src={imgg} alt="help" />
        </div>
        <div className="w-1/3">
          <p className="font-semibold text-lg mt-7">
            Get involved in improving tech education in Africa!
          </p>
          <button className="mt-12 px-4 py-2 bg-[#264FAD] text-white rounded hover:bg-blue-700">
            Support Us
          </button>
        </div>
        <div className="flex w-2/3 justify-around">
          <div>
            <p className="font-semibold">Links</p>
            <a href="/" className="block mt-2">
              Home
            </a>
            <a href="/success-stories" className="block mt-2">
              Success Stories
            </a>
            <a href="/about-us" className="block mt-2">
              About Us
            </a>
            <a href="/get-involved" className="block mt-2">
              Get Involved
            </a>
          </div>
          <div>
            <p className="font-semibold">Teams</p>
            <a href="/board-members" className="block mt-2">
              Board Members
            </a>
            <a href="/advisors-mentors" className="block mt-2">
              Advisors/Mentors
            </a>
            <a href="/executives" className="block mt-2">
              Executives
            </a>
            <a href="/staffs" className="block mt-2">
              Staffs
            </a>
          </div>
          <div>
            <p className="font-semibold">Blogs</p>
            <a href="/blogs/recent" className="block mt-2">
              Recent Blogs
            </a>
            <a href="/blogs/new" className="block mt-2">
              New Blog
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-4 flex justify-between items-center">
        <p>© 2020 Africa to Silicon Valley, Inc. All rights reserved.</p>
        <div className="flex gap-4">
          {/* Add your social media icons here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
