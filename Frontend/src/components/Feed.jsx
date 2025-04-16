// eslint-disable-next-line react/prop-types
const Feed = ({ title, link, pubDate, isDark }) => {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const date = new Date(pubDate).toLocaleDateString("en-US", options);

  return (
    <div className="px-2 mb-4">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2
          className={`font-medium mb-1 hover:text-orange-500 ${
            isDark ? "text-gray-300" : "text-gray-800"
          }`}
        >
          {title}
        </h2>
        <p className={`text-xs font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {date}
        </p>
      </a>
    </div>
  );
};

export default Feed;
