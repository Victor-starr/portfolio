
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react';
import './style/home.css';

function Home() {
const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
useEffect(() => {
document.documentElement.setAttribute('data-theme', theme);
document.body.classList.toggle("alternate", theme !== 'light');
}, [theme]);


function toggleTheme() {
    setTheme((prevTheme) => {
    const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    return newTheme;
    });
};

  return (
    <section className="homeHolder">
      <img src='../public/3dDarkTailwind.png' alt="" id="tialDark" />
      <img src='../public/3DVSMIRC.png' alt="" id="vsDark" />
      <img src='../public/3DVSCODE.png' alt="" id="vsWhite" />
      <img src='../public/3DAPICould.png' alt="" id="apicloud" />
      <img src='../public/3DJS.png' alt="" id="js" />
      <header>
        <div className="pfp" onClick={toggleTheme}>
          <img src='../public/3DHTML.png' alt="" id="html" />
          <img src='../public/Memoji.png' alt="" id="PImg1" />
          <img src='../public/3DCSS.png' alt="" id="css" />
        </div>
        <article>
          <h1>Hi, I&apos;m Victor</h1>
          <p>
            I&apos;m a <span className="HidenWords">front-end</span> web developer.
            Currently still a <span className="HidenWords">student in Softuni</span>.
            Most people hate <span className="HidenWords">Javascript</span>... <br />
            I am one of them.
          </p>
          <img src='../public/3DTailwind.png' alt="" id="tailWhite" />
        </article>
        <div className="nav-btns">
          <Link to="/about" className="abt-btn">About me</Link>
          <Link to="/education" className="con-btn">Education</Link>
          <img src='../public/3DGithub.png' alt="" id="github" />
        </div>
        <span className="copyright">Victor-Starr © {
        new Date().toLocaleString('en-US', { month: 'long' })}-{new Date().getFullYear()}</span>
      </header>
    </section>
  );
}

export default Home;