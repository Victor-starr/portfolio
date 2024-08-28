import { Link } from 'react-router-dom';
import darkTailwind from './assets/3dDarkTailwind.png';
import vsMirc from './assets/3DVSMIRC.png';
import vsCode from './assets/3DVSCODE.png';
import apiCloud from './assets/3DAPICould.png';
import js from './assets/3DJS.png';
import html from './assets/3DHTML.png';
import memoji from './assets/Memoji.png';
import css from './assets/3DCSS.png';
import tailwind from './assets/3DTailwind.png';
import github from './assets/3DGithub.png';

function Home() {

const pfp = document.getElementById('PImg1');
let theme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', theme);
document.body.classList.toggle("alternate", theme !== 'light');

function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle("alternate");
    theme = newTheme;
}

pfp?.addEventListener('click', toggleTheme);

  return (
    <section className="homeHolder">
      <img src={darkTailwind} alt="" id="tialDark" />
      <img src={vsMirc} alt="" id="vsDark" />
      <img src={vsCode} alt="" id="vsWhite" />
      <img src={apiCloud} alt="" id="apicloud" />
      <img src={js} alt="" id="js" />
      <header>
        <div className="pfp">
          <img src={html} alt="" id="html" />
          <img src={memoji} alt="" id="PImg1" />
          <img src={css} alt="" id="css" />
        </div>
        <article>
          <h1>Hi, I&apos;m Victor</h1>
          <p>
            I&apos;m a <span className="HidenWords">front-end</span> web developer.
            Currently still a <span className="HidenWords">student in Softuni</span>.
            Most people hate <span className="HidenWords">Javascript</span>... <br />
            I am one of them.
          </p>
          <img src={tailwind} alt="" id="tailWhite" />
        </article>
        <div className="nav-btns">
          <Link to="/about" className="abt-btn">About me</Link>
          <Link to="/education" className="con-btn">Education</Link>
          <img src={github} alt="" id="github" />
        </div>
        <span className="copyright">Victor-Starr © August-2024</span>
      </header>
    </section>
  );
}

export default Home;