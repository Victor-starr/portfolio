import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style/home.css";

function NotFound() {
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

  const pageHolder = document.querySelector("main > section");
  useEffect(() => {
    const tailwind3d = document.getElementById("tialDark");
    const vsCode = document.getElementById("vsCode");
    const react = document.getElementById("react");
    const apicloud = document.getElementById("apicloud");
    const js = document.getElementById("js");

    setTimeout(() => {
      tailwind3d.classList.add("slide-in-blurred-right");
      vsCode.classList.add("slide-in-blurred-top");
      react.classList.add("slide-in-blurred-bottom");
      apicloud.classList.add("slide-in-blurred-left");
      js.classList.add("slide-in-blurred-left");
    }, 1000);
    setTimeout(() => {
      tailwind3d.classList.remove("slide-in-blurred-right");
      vsCode.classList.remove("slide-in-blurred-top");
      react.classList.remove("slide-in-blurred-bottom");
      apicloud.classList.remove("slide-in-blurred-left");
      js.classList.remove("slide-in-blurred-left");
    }, 2000);
  }, [pageHolder]);

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }
  return (
    <section className="homeHolder">
      <img src="./3dDarkTailwind.png" alt="" id="tialDark" loading="lazy" />
      <img src="./3DVSCODE.png" alt="" id="vsCode" loading="lazy" />
      <img src="./3DReact.png" alt="" id="react" loading="lazy" />
      <img src="./3DAPICould.png" alt="" id="apicloud" loading="lazy" />
      <img src="./3DJS.png" alt="" id="js" loading="lazy" />
      <header style={{ justifyContent: "center" }}>
        <div className="pfp" onClick={toggleTheme}>
          <img src="./3DHTML.png" alt="" id="html" loading="lazy" />
          <img src="./Memoji.png" alt="" id="PImg1" loading="lazy" />
          <img src="./3DCSS.png" alt="" id="css" loading="lazy" />
        </div>
        <article>
          <h1>Page Not Found</h1>
        </article>
        <div className="nav-btns">
          <Link to="//" className="abt-btn">
            Go To Home
          </Link>
        </div>
        <span className="copyright">
          Victor-Starr © {new Date().toLocaleString("en-US", { month: "long" })}
          -{new Date().getFullYear()}
        </span>
      </header>
    </section>
  );
}

export default NotFound;
