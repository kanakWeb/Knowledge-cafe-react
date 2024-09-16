/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmarks ,handleReadingTimes}) => {
  // eslint-disable-next-line no-unused-vars
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 ">
      <h1 className="text-xl my-4 text-blue-600 font-semibold">Total Blogs : {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          allBlog={blog}
          handleBookmarks={handleBookmarks}
          handleReadingTimes={handleReadingTimes}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
