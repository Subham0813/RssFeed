// eslint-disable-next-line react/prop-types
const ErrorPage = ({ setServerError, isDark }) => {
  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        isDark ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div
        className={`text-center p-10 rounded-lg shadow-lg w-96 ${
          isDark ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"
        }`}
      >
        <h1
          className={`text-6xl font-extrabold ${
            isDark ? "text-red-400" : "text-red-500"
          }`}
        >
          404
        </h1>
        <p className="text-xl mt-2">Oops! Page Not Found</p>
        <p className={`mt-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          {`The page you're looking for doesn't exist or has been moved.`}
        </p>
        <button
          className={`mt-6 inline-block py-2 px-6 rounded-lg transition ${
            isDark
              ? "bg-blue-700 text-white hover:bg-blue-600"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => setServerError(false)}
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
