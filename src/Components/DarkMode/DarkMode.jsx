import React from "react";
import { useState, useEffect } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("#root").classList.remove("light_theme");
      document.querySelector("#root").classList.add("dark_theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("#root").classList.remove("dark_theme");
      document.querySelector("#root").classList.add("light_theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <p onClick={toggleDarkMode} className={darkMode ? "dark-mode" : ""}>
        {darkMode ? (
          <>
            {" "}
            <p style={{ fontSize: "18px", display: "inline" }}>Light Mode </p>
            <i class="fa-solid fa-sun" style={{ color: "#FFD43B" }}></i>{" "}
          </>
        ) : (
          <>
            <p style={{ fontSize: "18px", display: "inline" }}>Dark Mode </p>
            <i class="fa-solid fa-moon" style={{ color: "#74C0FC" }}></i>
          </>
        )}
      </p>
    </div>
  );
};

export default DarkMode;
