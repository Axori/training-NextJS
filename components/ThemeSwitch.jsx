import React, { useEffect, useState } from 'react';
import DarkTheme from "./DarkTheme.jsx";


const ThemeSwitch = () => {
  const DARK_MODE_KEY = "darkMode";
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    localStorage.setItem(DARK_MODE_KEY, JSON.stringify(!darkMode))
    setDarkMode(prev => !prev);
  };
  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem(DARK_MODE_KEY));
    console.log(darkMode)
    setDarkMode(darkMode ?? false);

  }, [])

  return (
    <>
      <button onClick={handleClick}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      <style jsx>{`
        button {
          background: none;
          cursor: pointer;
          color: inherit;
          border: none;
        }
      `}
      </style>
      {darkMode && <DarkTheme/>}
    </>
  );
};

export default ThemeSwitch;
