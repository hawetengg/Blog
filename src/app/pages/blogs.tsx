import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          {/* "Blogs" Title in Left Corner */}
          <h2 className="text-2xl font-bold">Blogs</h2>

          {/* Centered Container for Search and Button */}
          <div className="flex flex-grow justify-center">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search blogs..."
                className="px-4 py-2 border rounded-3xl w-80"
              />
              <button className="px-4 py-2 bg-[#264FAD] text-white rounded-3xl hover:bg-blue-700 ">
                + New Blog
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Example Blog Card */}
          <div className="p-4 border rounded shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-2">Blog Title</h3>
            <p className="text-gray-700">Blog summary or excerpt goes here.</p>
          </div>
          {/* Repeat Blog Card as needed */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
