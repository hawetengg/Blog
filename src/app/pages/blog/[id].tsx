// "use client";

// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";
// import BlogCard from "@/app/components/BlogCard";

// const BlogDetails: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [blog, setBlog] = useState<any>(null);
//   const [relatedBlogs, setRelatedBlogs] = useState<any[]>([]);

//   useEffect(() => {
//     if (id) {
//       const blogId = Array.isArray(id) ? id[0] : id;
//       fetchBlogDetails(blogId);
//     }
//   }, [id]);

//   const fetchBlogDetails = async (blogId: string) => {
//     try {
//       const response = await fetch(
//         `https://a2sv-backend.onrender.com/api/blogs/${blogId}`
//       );
//       const data = await response.json();
//       setBlog(data);

//       // Fetch related blogs (for simplicity, reusing the blog list and filtering out the current blog)
//       const relatedResponse = await fetch(
//         "https://a2sv-backend.onrender.com/api/blogs"
//       );
//       const relatedData = await relatedResponse.json();
//       setRelatedBlogs(relatedData.filter((b: any) => b._id !== blogId));
//     } catch (error) {
//       console.error("Error fetching blog details:", error);
//     }
//   };

//   if (!blog) return <div>Loading...</div>;

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-1 p-8">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
//           <div className="flex items-center mb-4">
//             {blog.author && (
//               <img
//                 src={blog.author.image}
//                 alt={blog.author.name}
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//             )}
//             <div>
//               <p className="font-bold">{blog.author?.name}</p>
//               <p className="text-gray-600 text-sm">
//                 {new Date(blog.createdAt).toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//           <img
//             src={blog.image}
//             alt={blog.title}
//             className="w-full h-64 object-cover mb-4"
//           />
//           <p className="text-lg text-gray-800">{blog.description}</p>
//         </div>

//         {/* Related Blogs Section */}
//         <div className="max-w-3xl mx-auto mt-10">
//           <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
//           <div className="grid gap-4">
//             {relatedBlogs.map((relatedBlog) => (
//               <BlogCard
//                 key={relatedBlog._id}
//                 image={relatedBlog.image}
//                 title={relatedBlog.title}
//                 description={relatedBlog.description}
//                 author={relatedBlog.author}
//                 skills={relatedBlog.skills} // Ensure skills is passed instead of tags
//                 createdAt={relatedBlog.createdAt}
//               />
//             ))}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default BlogDetails;
