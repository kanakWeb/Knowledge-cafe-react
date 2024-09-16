/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/header";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTimes, setReadingTimes] = useState(0);

  const handleBookmarks = (allBlog) => {
    const addedNewBookmark = [...bookmarks, allBlog];
    setBookmarks(addedNewBookmark);
  };

  const handleReadingTimes = (id,reading_time) => {
    const TotalTime = readingTimes + reading_time;
   
    //remove bookmarks
    console.log('remove bookmarks',id)
    const bookmarkRemoveItem=bookmarks.filter(remainBookmark=>remainBookmark.id !==id)
    console.log(readingTimes)
    setBookmarks(bookmarkRemoveItem)
    setReadingTimes(TotalTime);

  };

  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <div className="md:flex mx-5">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleReadingTimes={handleReadingTimes}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTimes={readingTimes}
        ></Bookmarks>
      </div>
    </div>
  );
}

export default App;
