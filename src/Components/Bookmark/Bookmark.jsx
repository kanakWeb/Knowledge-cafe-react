/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Bookmark = ({ bookmark }) => {
  return (
    <div className="w-full bg-white my-2   shadow-xl rounded-lg p-8">
      <p>{bookmark.title}</p>
    </div>
  );
};

export default Bookmark;
