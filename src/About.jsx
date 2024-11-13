
// Import dependencies and components
import Nav from "./_Nav";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./style/about.css";
import javaSkill from "./assets/javascript-svgrepo-com.svg";
import reactSkill from "./assets/react-svgrepo-com.svg";
import sassSkill from "./assets/sass-svgrepo-com.svg";

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
              {/* Turn the code on when Pass Js Web */}
              {/* <span>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><linearGradient id="a" x1="-645.732" y1="839.188" x2="-654.59" y2="839.25" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0.231" stopColor="#999875"></stop><stop offset="0.563" stopColor="#9b9977"></stop><stop offset="0.683" stopColor="#a09f7e"></stop><stop offset="0.768" stopColor="#a9a889"></stop><stop offset="0.837" stopColor="#b7b69a"></stop><stop offset="0.896" stopColor="#c9c7b0"></stop><stop offset="0.948" stopColor="#deddcb"></stop><stop offset="0.994" stopColor="#f8f6eb"></stop><stop offset="1" stopColor="#fbf9ef"></stop></linearGradient><linearGradient id="b" x1="-644.287" y1="823.405" x2="-657.028" y2="845.476" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#48a547"></stop><stop offset="1" stopColor="#3f9143"></stop></linearGradient><linearGradient id="c" x1="-643.386" y1="839.485" x2="-652.418" y2="833.417" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#41a247"></stop><stop offset="0.352" stopColor="#4ba74b"></stop><stop offset="0.956" stopColor="#67b554"></stop><stop offset="1" stopColor="#69b655"></stop></linearGradient></defs><title>file_type_mongo</title><path d="M16.62,30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741,3.423-.149a2.712,2.712,0,0,0-1.333,1.523A14.1,14.1,0,0,0,16.62,30Z" style={{ fill: "url(#a)" }}></path><path d="M17.026,26.329a13.223,13.223,0,0,0,5-13.225C20.556,6.619,17.075,4.487,16.7,3.673a9.792,9.792,0,0,1-.825-1.6l.277,18.069S15.578,25.664,17.026,26.329Z" style={{ fill: "url(#b)" }}></path><path d="M15.487,26.569S9.366,22.4,9.72,15.025A15.54,15.54,0,0,1,15.239,3.377,1.725,1.725,0,0,0,15.846,2c.381.82.319,12.243.359,13.579C16.36,20.776,15.916,25.588,15.487,26.569Z" style={{ fill: "url(#c)" }}></path></g></svg>
              </span>
              <span>
              <svg viewBox="-16.5 0 289 289" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z" fill="#539E43"> </path> </g> </g></svg>
              </span> */}
              
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
