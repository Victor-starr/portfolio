
// Import dependencies and components
import Nav from "./_Nav";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./style/about.css";
import javaSkill from "./assets/javascript-svgrepo-com.svg";
import reactSkill from "./assets/react-svgrepo-com.svg";
import sassSkill from "./assets/sass-svgrepo-com.svg";
import Figma from "./assets/figma-svgrepo-com.svg";
import GitT from "./assets/git-svgrepo-com.svg";

function About() {
  // State for interactive elements
  const [contImg, setContImg] = useState(null);  // Holds reference to content image container
  const [leftArrow, setLeftArrow] = useState(null);  // Reference to the left navigation arrow
  const [rightArrow, setRightArrow] = useState(null);  // Reference to the right navigation arrow
  const [secNCoding, setSecNCoding] = useState(true);  // Controls visibility of "Not Coding" section

  // DOM elements for show/hide buttons
  const hideBtn = document.getElementById("hideSecNotCoding");
  const showBtn = document.getElementById("showSecNotCoding");
  const secNotCoding = document.querySelector(".secNotCoding");

  // Set references for the interactive elements after the component mounts
  useEffect(() => {
    setContImg(document.querySelector(".contImg"));
    setLeftArrow(document.getElementById("leftArrow"));
    setRightArrow(document.getElementById("rightArrow"));
  }, []);

  // For animation effect on content sections within main page structure
  const pageHolder = document.querySelector('main > section');
  useEffect(() => {
    const myStory = document.querySelector('.myStory');
    const sectionLinks = document.querySelector('section.links');
    const contentsSliper = document.querySelectorAll('article.container');
    const secnNotCoding = document.querySelector('.secNotCoding');

    // Apply CSS animations to sections on load
    setTimeout(() => {
      myStory.classList.add('slide-in-blurred-left');
      sectionLinks.classList.add('slide-in-blurred-bottom');
      contentsSliper.forEach((x) => { x.classList.add('slide-in-blurred-right'); });
      secnNotCoding.classList.add('slide-in-blurred-top');
    }, 1000);
  }, [pageHolder]);

  // Update arrow display based on window size and scroll position
  useEffect(() => {
    if (contImg && leftArrow && rightArrow) {
      function updateArrows() {
        // If window is narrow, hide arrows and the "Not Coding" section
        if (window.innerWidth < 1300) {
          leftArrow.style.display = "none";
          rightArrow.style.display = "none";
          secNotCoding.classList.remove("secNotCodingHiden");
          showBtn.style.display = "none";
          hideBtn.style.display = "none";
        } else {
          // Show or hide arrows based on scroll position within the image container
          if (contImg.scrollLeft === 0) {
            leftArrow.style.opacity = "0";
            setTimeout(() => (leftArrow.style.display = "none"), 300);
          } else {
            leftArrow.style.display = "block";
            setTimeout(() => (leftArrow.style.opacity = "1"), 10);
          }
          if (contImg.scrollWidth - contImg.clientWidth === contImg.scrollLeft) {
            rightArrow.style.opacity = "0";
            setTimeout(() => (rightArrow.style.display = "none"), 300);
          } else {
            rightArrow.style.display = "block";
            setTimeout(() => (rightArrow.style.opacity = "1"), 10);
          }
        }
      }

      // Add listeners to update arrow visibility on scroll or resize
      contImg.addEventListener("scroll", updateArrows);
      window.addEventListener("resize", updateArrows);

      updateArrows();

      return () => {
        // Cleanup listeners on unmount
        contImg.removeEventListener("scroll", updateArrows);
        window.removeEventListener("resize", updateArrows);
      };
    }
  });

  // Scroll functions for left and right arrows
  function ScrollRight() {
    contImg.scrollBy({ left: -160, behavior: "smooth" });
  }

  function ScrollLeft() {
    contImg.scrollBy({ left: 160, behavior: "smooth" });
  }

  // Toggles visibility of "Not Coding" section
  function ToggleNCoding() {
    secNotCoding.classList.toggle("secNotCodingHiden");
    setSecNCoding(!secNCoding);

    // Update button visibility based on toggle state
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
            <img src="./Memoji.png" alt="" id="GoHome" loading="lazy"/>
            <article>
              <h2>My Story</h2>
              <p>
                <span>
                📍Plovdiv/Bulgaria
                </span>
               My name is Victor, and I&apos;m from the beautiful city of
                Plovdiv, Bulgaria. I am currently a student at Software
                University (SoftUni), specializing in front-end web
                development. My journey into programming began in mid-high
                school, and it has been a fascinating adventure ever since. I
                primarily work with JavaScript that many might
                dislike, but I genuinely love for its versatility and power. As
                the second child in a family of three, I have always been driven
                to carve my unique path. With only three months left until I
                graduate, I&apos;m excited to continue my journey into the world
                of Computer Science at a university in Europe.
              </p>
            </article>
          </section>
          <section className="container links">
            <h3>Skills</h3>
            <div>

              <span>
                <img src={javaSkill} alt="JavaScript" loading="lazy" />
              </span>
              <span>
                <img src={reactSkill} alt="React" loading="lazy" />
              </span>
              <span>
                <img src={sassSkill} alt="Sass" loading="lazy" />
              </span>
              <span>
                <img src={Figma} alt="Figma" loading="lazy" />
              </span>
              <span>
                <img src={GitT} alt="GitT" loading="lazy" />
              </span>
              
            </div>
          </section>
        </div>

        <div className="rightSide">
          <section className="content">
            <article className="container">
              <h2>Creative Innovator</h2>
              <p>
                As a front-end developer, I am driven by a passion for
                innovation. I enjoy the challenge of transforming ideas into
                functional, visually appealing web applications. JavaScript is
                my primary tool, and I approach each project with curiosity and
                a desire to learn.
              </p>
            </article>

            <article className="container">
              <h2>Designing Engaging Experiences</h2>
              <p>
                I strive to create digital experiences that are both efficient
                and meaningful for users. With an eye for detail, I aim to push
                the boundaries of what&apos;s possible in web development, as I
                prepare for my next step in studying Computer Science in Europe.
              </p>
            </article>

            <article className="container">
              <h2>Process Enthusiast</h2>
              <p>
                I love the process of building from scratch. From my first lines
                of code in my high school years, I knew programming was my path.
                Exploring new frameworks and experimenting with JavaScript to
                solve problems excites me.
              </p>
            </article>

            <article className="container">
              <h2>Passionate Problem Solver</h2>
              <p>
                Whether developing a new feature or refining a user interface, I
                find joy in every step of the process. The thrill of solving
                complex challenges keeps me motivated to continue creating and
                learning.
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
                <figcaption>Take my dog</figcaption>
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
