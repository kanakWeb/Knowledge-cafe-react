/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaBookBookmark } from "react-icons/fa6";
import PropTypes from "prop-types";
const Blog = ({ allBlog, handleBookmarks, handleReadingTimes }) => {
  const {
    Cover,
    title,
    author,
    author_Img,
    posted_date,
    reading_time,
    hashtags,
  } = allBlog;

  return (
    <div className="mb-20 md:mr-8">
      <img
        className="w-full mt-4 mb-8 rounded-md "
        src={Cover}
        alt={`image title ${title}`}
      />

      <div className="flex mb-2 justify-between">
        <div className="flex items-center">
          <img className="w-14 h-14   rounded-full" src={author_Img} alt="" />
          <div className="ml-6">
            <h3 className="text-lg">{author}</h3>
            <p className="text-sm">{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="mx-4">{reading_time} min read</span>
          <button
            onClick={() => handleBookmarks(allBlog)}
            className="text-violet-500 text-xl"
          >
            <FaBookBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      {hashtags.map((hashtag, index) => (
        <span className="mx-2 font-medium text-sm" key={index}>
          <a href="#"># {hashtag}</a>
        </span>
      ))}
      <div className="mt-4">
        <button
          onClick={() => handleReadingTimes(reading_time)}
          className="text-lg font-medium text-blue-600 underline"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  allBlog: PropTypes.object.isRequired,
};
export default Blog;
