import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "Jan 10, 2024",
    author: "Admin",
    image: "../src/assets/blog1.jpg",
    excerpt: "A deep dive into modern design trends that cater to millennials...",
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "Feb 05, 2024",
    author: "Admin",
    image: "../src/assets/blog2.jpg",
    excerpt: "Discover fresh interior decoration techniques that elevate any space...",
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "Mar 15, 2024",
    author: "Admin",
    image: "../src/assets/blog3.jpg",
    excerpt: "Exploring the art of handmade crafts and their unique touch...",
  },
];

const categories = ["Design", "Lifestyle", "Photography", "Travel", "Technology"];
const recentPosts = blogPosts.slice(0, 3);

const BlogSection = () => {
  return (
    <div className="container mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Blog Posts */}
      <div className="md:col-span-2 space-y-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date} | {post.author}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <button className="text-blue-600 font-semibold hover:underline">Read More</button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Sidebar */}
      <div className="space-y-8">
        {/* Search Box */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <input type="text" placeholder="Search..." className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
        </div>

        {/* Categories */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index} className="text-gray-700 hover:text-blue-600 cursor-pointer">{category}</li>
            ))}
          </ul>
        </div>
        
        {/* Recent Posts */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
          <ul className="space-y-3">
            {recentPosts.map((post) => (
              <li key={post.id} className="flex items-center space-x-3">
                <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded" />
                <span className="text-gray-700 hover:text-blue-600 cursor-pointer text-sm">{post.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
