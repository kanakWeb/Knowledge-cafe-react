/* eslint-disable react/prop-types */
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTimes }) => {
  console.log(bookmarks);
  return (
    <div className="w-1/3 p-3 bg-slate-200">
      <p className="w-full font-semibold bg-slate-50 border-[#6047EC] border-2 text-[#6047EC]  my-2 text-center  shadow-xl rounded-lg p-6">
        Spent time on read : {readingTimes} min
      </p>

      <h2>Bookmarked Blog : {bookmarks.length}</h2>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
