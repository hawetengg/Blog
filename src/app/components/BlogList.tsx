"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "@/app/components/BlogCard";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          "https://a2sv-backend.onrender.com/api/blogs"
        );
        const data = await response.json();
        setBlogs(data.slice(0, 5)); 
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, []);

  
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Blogs</h2>

          {/* Centered Container for Search and Button */}
          <div className="flex flex-grow justify-center">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search blogs..."
                className="px-4 py-2 border rounded-3xl w-80"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="px-4 py-2 bg-[#264FAD] text-white rounded-3xl hover:bg-blue-700">
                + New Blog
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              author={blog.author}
              skills={blog.skills}
              createdAt={blog.createdAt}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
