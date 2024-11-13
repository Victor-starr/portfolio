import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import sunSvg from "./assets/sun.svg"; // Image for light mode icon
import moonSvg from "./assets/moon.svg"; // Image for dark mode icon

function Nav() {
  // Get the initial theme based on system preferences or saved theme in localStorage
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    // If a theme was saved in localStorage, use that theme
    if (savedTheme) {
      return savedTheme;
    }
    // If no theme is saved, use the system preference (dark or light mode)
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDarkScheme ? "dark" : "light"; // Defaults to dark if system prefers dark
  };

  // State to keep track of the current theme, initialized with the result of getInitialTheme
  const [theme, setTheme] = useState(getInitialTheme());

  // useEffect to apply the theme changes whenever the theme state is updated
  useEffect(() => {
    // Set a data attribute on the document for theme-based styling
    document.documentElement.setAttribute('data-theme', theme);
    // Toggle the 'alternate' class on the body if the theme is not light
    document.body.classList.toggle("alternate", theme !== 'light');
  }, [theme]);

  // Function to toggle between light and dark themes
  function toggleTheme() {
    setTheme((prevTheme) => {
      // Switch between 'dark' and 'light' themes
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      // Save the selected theme in localStorage for persistence
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Event listener for window resizing to adjust nav menu display based on screen size
  window.addEventListener('resize', () => {
    const navgig = document.querySelector("nav");
    const exitBtn = document.getElementById("exitbar");
    const menuBtn = document.getElementById("menubar");
    // When the width is larger than 1300px, make sure the menu bar is expanded and buttons are hidden
    if (window.innerWidth > 1300) {
        navgig.classList.remove('phoneVrs');
        exitBtn.style.display = 'none';
        menuBtn.style.display = 'none';
    } else if (window.innerWidth <= 1300) {
        // Show menu button and hide exit button on smaller screens
        navgig.classList.remove('phoneVrs');
        menuBtn.style.display = 'block';
        exitBtn.style.display = 'none';
    }
  });

  // Function to open the sidebar menu in a phone-like view (for smaller screens)
  function openSideBar() {
    const navgig = document.querySelector("nav");
    const exitBtn = document.getElementById("exitbar");
    const menuBtn = document.getElementById("menubar");
    // Add a class to transform the nav to a phone view and show the exit button
    navgig.classList.add("phoneVrs");
    exitBtn.style.display = "block";
    menuBtn.style.display = "none";
  }

  // Function to close the sidebar menu in the phone-like view
  function exitSideBar() {
    const navgig = document.querySelector("nav");
    const exitBtn = document.getElementById("exitbar");
    const menuBtn = document.getElementById("menubar");
    // Remove phone view class and adjust button visibility
    navgig.classList.remove("phoneVrs");
    exitBtn.style.display = "none";
    menuBtn.style.display = "block";
  }

  // JSX for the Nav component: contains the theme toggle button, menu buttons, and navigation links
  return (
    <nav>
      {/* Theme toggle button switches between light and dark modes */}
      <img
        id="toggleMode"
        onClick={toggleTheme}
        src={theme === "dark" ? sunSvg : moonSvg}
        alt="Dark/Light"
        loading="lazy"
      />
      
      {/* Menu button for opening sidebar on smaller screens */}
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
      
      {/* Exit button for closing the sidebar on smaller screens */}
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
      
      {/* Navigation links to different sections/pages */}
      <ul>
        <li><Link to="//">Home</Link></li>
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li>
          {/* Social/Download icons */}
          <Link to='https://www.linkedin.com/in/victor-starr/' target="_blank" className="fa fa-linkedin"></Link>
          <Link to='https://github.com/Victor-starr' target="_blank" className="fa fa-github"></Link>
          <Link to='https://docs.google.com/document/d/1gEctcECGR8qkWDh-NEGy6SqeWQAqz-EG/edit?usp=sharing&ouid=112263069503224360007&rtpof=true&sd=true' target="_blank" className="fa fa-download"></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
