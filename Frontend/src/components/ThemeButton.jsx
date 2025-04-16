/* eslint-disable react/prop-types */
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"

const ThemeButton = ({ isDark, setIsDark }) => {
    const toggleTheme = () => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      localStorage.setItem("isDark", JSON.stringify(newTheme));
    };
  
    return (
      <button onClick={toggleTheme}
      className={`border-2 ${isDark ? "border-blue-500" : "border-orange-400"} p-2 rounded-xl absolute right-3 top-3`}
      >
        {isDark ? (
          <img src={sun} alt="Switch to Light Theme"/>
        ) : (
          <img src={moon} alt="Switch to Dark Theme" />
        )}
      </button>
    );
  };
  
  export default ThemeButton;
  