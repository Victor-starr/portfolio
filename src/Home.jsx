import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style/home.css";

function Home() {
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
      <header>
        <div className="pfp" onClick={toggleTheme}>
          <img src="./3DHTML.png" alt="" id="html" loading="lazy" />
          <img src="./Memoji.png" alt="" id="PImg1" loading="lazy" />
          <img src="./3DCSS.png" alt="" id="css" loading="lazy" />
        </div>
        <article>
          <h1>Hi, I&apos;m Victor</h1>
          <p>
            I&apos;m a <span className="HidenWords">front-end</span> web
            developer. Currently still a{" "}
            <span className="HidenWords">student in Softuni</span>. Most people
            hate <span className="HidenWords">Javascript</span>... <br />I am
            one of them.
          </p>
        </article>
        <div className="nav-btns">
          <Link to="/about" className="abt-btn">
            About me
          </Link>
          <Link to="/education" className="con-btn">
            Education
          </Link>
          <img src="./3DGithub.png" alt="" id="github" loading="lazy" />
        </div>
        <span className="copyright">
          Victor-Starr © {new Date().toLocaleString("en-US", { month: "long" })}
          -{new Date().getFullYear()}
        </span>
      </header>
    </section>
  );
}

export default Home;
