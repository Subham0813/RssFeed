import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/Errorpage";
import Contents from "./components/Contents";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(0);
  const [serverError, setServerError] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const getDataFromServer = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Http error! Status : ${response.status}`);
      }
      const fetchedData = await response.json();
      setFeeds(fetchedData);
      setServerError(false);
      localStorage.setItem("feed", JSON.stringify(fetchedData));
    } catch (error) {
      setServerError(true);
      console.error("error :", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedFeed = localStorage.getItem("feed");
    if (storedFeed) {
      setFeeds(JSON.parse(storedFeed));
      setId(-1);
    }
    if (id !== -1) {
      localStorage.setItem("id", JSON.stringify(id)); 
      getDataFromServer(`http://localhost:4000/category/${id}`, id);
      setId(-1);
    }
  }, [id]);

  useEffect(() => {
    const isDarkStored = localStorage.getItem("isDark");
    if (isDarkStored !== null) {
      setIsDark(JSON.parse(isDarkStored));
      document.body.className = isDark ? "dark-mode" : "light-mode";
    }
  }, [isDark]);

  return (
    <main>
      {serverError ? (
        <ErrorPage setServerError={setServerError} isDark={isDark} />
      ) : (
        <>
          <header
            className={`w-full rounded-b-2xl shadow-2xl overflow-hidden sticky top-0 z-50 ${
              isDark ? "bg-gray-800 text-gray-300" : "bg-gray-300 text-gray-800"
            }`}
          >
            <section className="relative">
              <h3
                className={`px-5 py-3 text-8xl max-md:text-6xl font-extrabold cursor-pointer text-center ${
                  isDark ? "text-blue-600" : "text-blue-400"
                }`}
              >
                Feed
                <span
                  className={`text-xl max-md:text-base font-serif px-4 ${
                    isDark ? "text-orange-500" : "text-orange-400"
                  }`}
                >
                  your daily need
                </span>
              </h3>
              <ThemeButton isDark={isDark} setIsDark={setIsDark} />
            </section>
            <Navbar setId={setId} isDark={isDark} setLoading={setLoading} />
          </header>
          <Contents loading={loading} feeds={feeds} isDark={isDark} />
        </>
      )}
    </main>
  );
}

export default App;
