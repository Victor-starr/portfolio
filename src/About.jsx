// Import dependencies and components
import Nav from "./_Nav";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./style/about.css";
import typeScript from "./assets/typescript.svg";
import reactSkill from "./assets/react-svgrepo-com.svg";
import sassSkill from "./assets/sass-svgrepo-com.svg";
import MongoDb from "./assets/mongodb-svg.svg";
import TailwindCss from "./assets/tailwindcss.svg";
import NodeJs from "./assets/node-js.svg";

function About() {
  const [contImg, setContImg] = useState(null);
  const [leftArrow, setLeftArrow] = useState(null);
  const [rightArrow, setRightArrow] = useState(null);
  const [secNCoding, setSecNCoding] = useState(true);

  const hideBtn = document.getElementById("hideSecNotCoding");
  const showBtn = document.getElementById("showSecNotCoding");
  const secNotCoding = document.querySelector(".secNotCoding");

  useEffect(() => {
    setContImg(document.querySelector(".contImg"));
    setLeftArrow(document.getElementById("leftArrow"));
    setRightArrow(document.getElementById("rightArrow"));
  }, []);

  const pageHolder = document.querySelector("main > section");
  useEffect(() => {
    const myStory = document.querySelector(".myStory");
    const sectionLinks = document.querySelector("section.links");
    const contentsSliper = document.querySelectorAll("article.container");
    const secnNotCoding = document.querySelector(".secNotCoding");

    setTimeout(() => {
      myStory.classList.add("slide-in-blurred-left");
      sectionLinks.classList.add("slide-in-blurred-bottom");
      contentsSliper.forEach((x) => {
        x.classList.add("slide-in-blurred-right");
      });
      secnNotCoding.classList.add("slide-in-blurred-top");
    }, 1000);
  }, [pageHolder]);

  useEffect(() => {
    if (contImg && leftArrow && rightArrow) {
      function updateArrows() {
        if (window.innerWidth < 1300) {
          leftArrow.style.display = "none";
          rightArrow.style.display = "none";
          secNotCoding.classList.remove("secNotCodingHiden");
          showBtn.style.display = "none";
          hideBtn.style.display = "none";
        } else {
          if (contImg.scrollLeft === 0) {
            leftArrow.style.opacity = "0";
            setTimeout(() => (leftArrow.style.display = "none"), 300);
          } else {
            leftArrow.style.display = "block";
            setTimeout(() => (leftArrow.style.opacity = "1"), 10);
          }
          if (
            contImg.scrollWidth - contImg.clientWidth ===
            contImg.scrollLeft
          ) {
            rightArrow.style.opacity = "0";
            setTimeout(() => (rightArrow.style.display = "none"), 300);
          } else {
            rightArrow.style.display = "block";
            setTimeout(() => (rightArrow.style.opacity = "1"), 10);
          }
        }
      }

      contImg.addEventListener("scroll", updateArrows);
      window.addEventListener("resize", updateArrows);

      updateArrows();

      return () => {
        contImg.removeEventListener("scroll", updateArrows);
        window.removeEventListener("resize", updateArrows);
      };
    }
  });

  function ScrollRight() {
    contImg.scrollBy({ left: -160, behavior: "smooth" });
  }

  function ScrollLeft() {
    contImg.scrollBy({ left: 160, behavior: "smooth" });
  }

  function ToggleNCoding() {
    secNotCoding.classList.toggle("secNotCodingHiden");
    setSecNCoding(!secNCoding);

    if (!secNCoding) {
      showBtn.style.display = "block";
      hideBtn.style.display = "none";
      secNotCoding.classList.remove("slide-in-right");
      secNotCoding.classList.add("slide-in-left");
    } else {
      showBtn.style.display = "none";
      hideBtn.style.display = "block";
      secNotCoding.classList.remove("slide-in-left");
      secNotCoding.classList.add("slide-in-right");
    }
  }

  // Component rendering
  return (
    <>
      <Nav />
      <section className="pageHolder">
        <div className="leftSide">
          <h1>About Me</h1>
          <section className="container myStory">
            <img src="./Memoji.png" alt="" id="GoHome" loading="lazy" />
            <article>
              <h2>My Story</h2>
              <p>
                <span>📍Plovdiv, Bulgaria</span>
                I’m Victor, a Full-stack development student at Software
                University (SoftUni). My programming journey started in high
                school and quickly became a passion. I primarily work with
                JavaScript — a language many dislike but one I appreciate for
                its versatility. As the second of three siblings, I’ve always
                sought to carve my own path. With graduation just months away,
                I’m excited to take the next step in my Computer Science studies
                in Europe.
              </p>
            </article>
          </section>
          <section className="container links">
            <h3>Skills</h3>
            <div>
              <span>
                <img src={typeScript} alt="Typescript" loading="lazy" />
              </span>
              <span>
                <img src={reactSkill} alt="React" loading="lazy" />
              </span>
              <span>
                <img src={sassSkill} alt="Sass" loading="lazy" />
              </span>
            </div>
            <div>
              <span>
                <img src={MongoDb} alt="MongoDb" loading="lazy" />
              </span>
              <span>
                <img src={TailwindCss} alt="TailwindCss" loading="lazy" />
              </span>
              <span>
                <img src={NodeJs} alt="NodeJs" loading="lazy" />
              </span>
            </div>
          </section>
        </div>

        <div className="rightSide">
          <section className="content">
            <article className="container">
              <h2>Creative Technologist</h2>
              <p>
                As a front-end developer, I enjoy turning ideas into functional,
                engaging experiences. While JavaScript is my primary tool, I’m
                always learning and adapting to new technologies. I thrive on
                challenges that push my skills and help me grow.
              </p>
            </article>

            <article className="container">
              <h2>Building with Purpose</h2>
              <p>
                Every project is an opportunity to refine my approach and find
                the best possible solution. Whether it’s optimizing performance,
                enhancing usability, or experimenting with new techniques, I
                focus on creating meaningful and efficient solutions.
              </p>
            </article>

            <article className="container">
              <h2>Driven by Curiosity</h2>
              <p>
                From my first lines of code, I was hooked on the endless
                possibilities of technology. I’m always exploring new
                frameworks, tools, and methodologies to improve the way I build
                and solve problems.
              </p>
            </article>

            <article className="container">
              <h2>Practical Problem Solver</h2>
              <p>
                Bugs and errors are just part of the process—I see them as
                challenges to overcome. Rather than getting stuck, I focus on
                finding clear, effective solutions that keep projects moving
                forward.
              </p>
            </article>

            <article className="container">
              <h2>Always Learning, Always Improving</h2>
              <p>
                Technology is constantly evolving, and I embrace the challenge
                of keeping up. Whether it’s exploring new frameworks, refining
                my development process, or expanding into backend technologies,
                I’m always looking for ways to improve and grow as a developer.
              </p>
            </article>
          </section>

          <section className="container secNotCoding secNotCodingHiden">
            <svg
              onClick={ToggleNCoding}
              id="showSecNotCoding"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z"
                  stroke="var(--Icons-color)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M7.96997 2V22"
                  stroke="var(--Icons-color)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14.97 9.43994L12.41 11.9999L14.97 14.5599"
                  stroke="var(--Icons-color)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <svg
              onClick={ToggleNCoding}
              id="hideSecNotCoding"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z"
                  stroke="var(--Icons-color)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14.97 2V22"
                  stroke="var(--Icons-color)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M7.96997 9.43994L10.53 11.9999L7.96997 14.5599"
                  stroke="var(--Icons-color)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>

            <h4>When I am not Coding...</h4>
            {/* LEFT ARROW */}
            <svg
              onClick={() => ScrollRight()}
              id="leftArrow"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                fillRule="evenodd"
                d="M17.414 20.707a1 1 0 000-1.414L10.121 12l7.293-7.293a1 1 0 000-1.414l-.707-.707a1 1 0 00-1.414 0l-8.354 8.353a1.5 1.5 0 000 2.122l8.354 8.353a1 1 0 001.414 0l.707-.707z"
                clipRule="evenodd"
              ></path>
            </svg>
            {/* RIGHT ARROW */}
            <svg
              onClick={() => ScrollLeft()}
              id="rightArrow"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                fillRule="evenodd"
                d="M6.586 3.293a1 1 0 000 1.414L13.879 12l-7.293 7.293a1 1 0 000 1.414l.707.707a1 1 0 001.414 0l8.354-8.353a1.5 1.5 0 000-2.122L8.707 2.586a1 1 0 00-1.414 0l-.707.707z"
                clipRule="evenodd"
              ></path>
            </svg>

            <div className="contImg">
              <figure>
                <img src="./gym.jpg" alt="gym" loading="lazy" />
                <figcaption>Going gym</figcaption>
              </figure>
              <figure>
                <img src="./dog.jpg" alt="dog" loading="lazy" />
                <figcaption>Dog walks</figcaption>
              </figure>
              <figure>
                <img src="./travel.png" alt="trav" loading="lazy" />
                <figcaption>Travel</figcaption>
              </figure>
              <figure>
                <img src="./ice-skate.jpg" alt="iceSkate" loading="lazy" />
                <figcaption>Ice Skate</figcaption>
              </figure>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default About;
