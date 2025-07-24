import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import sunSvg from "./assets/sun.svg";
import moonSvg from "./assets/moon.svg";

/**
 * Nav component that handles theme toggling and responsive navigation bar.
 *
 * @component
 *
 * @example
 * return (
 *   <Nav />
 * )
 *
 * @returns {JSX.Element} The rendered navigation component.
 *
 * @description
 * This component manages the navigation bar of the portfolio. It includes functionality for:
 * - Toggling between dark and light themes based on system preferences or user selection.
 * - Responsive design adjustments for different screen sizes.
 * - Opening and closing a sidebar menu on smaller screens.
 *
 * @function getInitialTheme
 * @returns {string} The initial theme based on system preferences or saved theme in localStorage.
 *
 * @function toggleTheme
 * Toggles the theme between dark and light modes, and saves the selected theme in localStorage.
 *
 * @function openSideBar
 * Opens the sidebar menu on smaller screens.
 *
 * @function exitSideBar
 * Closes the sidebar menu on smaller screens.
 *
 * @listens window#resize
 * Adjusts the navigation bar layout based on the window size.
 */
function Nav() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkScheme ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.toggle("alternate", theme !== "light");
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  window.addEventListener("resize", () => {
    const navgig = document.querySelector("nav");
    const exitBtn = document.getElementById("exitbar");
    const menuBtn = document.getElementById("menubar");
    if (window.innerWidth > 1300) {
      navgig.classList.remove("phoneVrs");
      exitBtn.style.display = "none";
      menuBtn.style.display = "none";
    } else if (window.innerWidth <= 1300) {
      navgig.classList.remove("phoneVrs");
      menuBtn.style.display = "block";
      exitBtn.style.display = "none";
    }
  });

  function openSideBar() {
    const navgig = document.querySelector("nav");
    const exitBtn = document.getElementById("exitbar");
    const menuBtn = document.getElementById("menubar");
    navgig.classList.add("phoneVrs");
    exitBtn.style.display = "block";
    menuBtn.style.display = "none";
  }

  function exitSideBar() {
    const navgig = document.querySelector("nav");
    const exitBtn = document.getElementById("exitbar");
    const menuBtn = document.getElementById("menubar");
    navgig.classList.remove("phoneVrs");
    exitBtn.style.display = "none";
    menuBtn.style.display = "block";
  }

  return (
    <nav>
      <img
        id="toggleMode"
        onClick={toggleTheme}
        src={theme === "dark" ? sunSvg : moonSvg}
        alt="Dark/Light"
        loading="lazy"
      />

      <svg
        id="menubar"
        onClick={openSideBar}
        viewBox="0 0 24 24"
        height="45px"
        width="45px"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Icon-Set-Filled"
          d="M4 6H20M4 12H20M4 18H20"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>

      <svg
        id="exitbar"
        onClick={exitSideBar}
        viewBox="0 0 24 24"
        height="35px"
        width="35px"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Icon-Set-Filled"
          d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
          fill="#0F0F0F"
        ></path>
      </svg>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/victor-starr/"
            target="_blank"
            className="fa fa-linkedin"
          ></Link>
          <Link
            to="https://github.com/Victor-starr"
            target="_blank"
            className="fa fa-github"
          ></Link>
          <Link
            to="/public/resume.pdf"
            target="_blank"
            className="fa fa-folder-open"
          ></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
