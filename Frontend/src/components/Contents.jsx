/* eslint-disable react/prop-types */
import Feed from "./Feed";

const Contents = ({ loading, feeds, isDark }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
      {loading ? (
        <p
          className={`text-xl font-semibold m-8 ${
            isDark ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Loading...
        </p>
      ) : (
        <>
          {Array.isArray(feeds) &&
            feeds
              .filter((feed) => feed.data[0].length > 0)
              .map((feed, index) => (
                <div
                  className={`border mx-auto p-5 rounded-3xl shadow-2xl m-6 flex flex-col items-center ${
                    isDark
                      ? "bg-gray-800 text-gray-300"
                      : "bg-stone-50 text-gray-700"
                  }`}
                  key={index}
                >
                  <h1
                    className={`w-full text-5xl md:text-3xl text-center font-bold rounded-xl py-2 mb-2 ${
                      isDark
                        ? "bg-orange-400 text-gray-900"
                        : "bg-orange-300 text-gray-700"
                    }`}
                  >
                    {feed.name}
                  </h1>
                  <div className="h-3/5 max-w-lg">
                    {feed.data[0].map((item, i) => (
                      <Feed
                        key={i}
                        title={item.title}
                        link={item.link}
                        pubDate={item.date}
                        isDark={isDark}
                      />
                    ))}
                  </div>
                </div>
              ))}
        </>
      )}
    </div>
  );
};

export default Contents;
