// import { Link } from &apos;react-router-dom&apos;;
import Nav from "./_Nav";
// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Gym from "./assets/gym.jpg";
import Dog from "./assets/dog.jpg";
import Trav from "./assets/trav.jpg";
import IceSkate from "./assets/ice-skate.jpg";
import Memoji from "./assets/Memoji.png";
import "./style/about.css";

function About() {
  const [contImg, setContImg] = useState(null);
  const [leftArrow, setLeftArrow] = useState(null);
  const [rightArrow, setRightArrow] = useState(null);

  useEffect(() => {
    setContImg(document.querySelector(".contImg"));
    setLeftArrow(document.getElementById("leftArrow"));
    setRightArrow(document.getElementById("rightArrow"));
  }, []);

  useEffect(() => {
    if (contImg && leftArrow && rightArrow) {
      // Function to update arrow visibility based on scroll position and window width
      function updateArrows() {
        if (window.innerWidth < 1300) {
          // Hide both arrows on small screens
          leftArrow.style.display = "none";
          rightArrow.style.display = "none";
        } else {
          // Show or hide arrows based on scroll position
          if (contImg.scrollLeft === 0) {
            leftArrow.style.opacity = "0";
            setTimeout(() => (leftArrow.style.display = "none"), 300);
          } else {
            leftArrow.style.display = "block";
            setTimeout(() => (leftArrow.style.opacity = "1"), 10);
          }

          if (
            contImg.scrollWidth - contImg.clientWidth === contImg.scrollLeft
          ) {
            rightArrow.style.opacity = "0";
            setTimeout(() => (rightArrow.style.display = "none"), 300);
          } else {
            rightArrow.style.display = "block";
            setTimeout(() => (rightArrow.style.opacity = "1"), 10);
          }
        }
      }

      // Update arrows visibility on scroll and on window resize
      contImg.addEventListener("scroll", updateArrows);
      window.addEventListener("resize", updateArrows); // Update on window resize

      // Initial check
      updateArrows();

      // Clean up event listeners
      return () => {
        contImg.removeEventListener("scroll", updateArrows);
        window.removeEventListener("resize", updateArrows);
      };
    }
  }, [contImg, leftArrow, rightArrow]);

  function ScrollRight() {
    contImg.scrollBy({ left: -160, behavior: "smooth" });
  }

  function ScrollLeft() {
    contImg.scrollBy({ left: 160, behavior: "smooth" });
  }

  return (
    <>
      <Nav />
      <section className="pageHolder">
        <div className="leftSide">
          <h1>About Me</h1>
          <section className="container myStory">
            <img src={Memoji} alt="" id="GoHome" />
            <article>
              <h2>My Story</h2>

              <p>
                I&apos;m a front-end web developer. Currently still a student in
                Softuni. Most people hate Javascript... I am one of
                them.I&apos;m a front-end web Currently still a student in
                Softuni. Most people hate Javascript... I am one of them.
                <br />
                I&apos;m a front-end web developer. Currently still a student in
                Softuni. Most people hate Javascript... I am one of
                them.I&apos;m a front-end web Currently still a student in
                Softuni. Most people hate Javascript... I am one of them.
                I&apos;m a front-end web
                <br />
                developer.Currently still a student in Softuni.Most people hate
                Javascript...I am one of them.I&apos;m a front-end web
                developer.Currently still a student.
              </p>
            </article>
          </section>
          <section className="container links">
            <h3>Links</h3>
            <div>
              <Link
                to="https://www.linkedin.com/in/victor-starr/"
                target="_blank"
              >
                <svg
                id="linkedSVG"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  version="1.1"
                  viewBox="0 0 20 20"
                >
                  <g>
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <g id="Dribbble-Light-Preview" fill="#000" transform="translate(-180 -7479)">
                        <g transform="translate(56 160)">
                          <path d="M144 7339h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V7339h-4v-13h4v1.462s1.255-2.202 4.083-2.202c2.829 0 4.917 1.726 4.917 5.298V7339zm-17.558-15.079a2.451 2.451 0 01-2.442-2.461 2.451 2.451 0 012.442-2.46 2.451 2.451 0 012.441 2.46 2.45 2.45 0 01-2.441 2.461zM124 7339h5v-13h-5v13z"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>

              <Link to="mailto:viktordm89@gmail.com" target="_blank">
                <svg
                  id="mailSVG"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000"
                  version="1.1"
                  viewBox="0 -3.5 32 32"
                >
                  <g>
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <g id="Icon-Set-Filled" fill="#000" transform="translate(-414 -261)">
                        <path d="M430 275.916l-3.316-2.749-11.569 11.843h29.476l-11.356-11.863-3.235 2.769zm4.89-4.026l11.002 11.439a2.53 2.53 0 00.108-.695v-19.772l-11.11 9.028zM414 262.816v19.818c0 .243.045.473.108.695l11.039-11.402L414 262.816zM445 261h-30l15 12.019L445 261z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>

              <Link to="" target="_blank">
                <svg
                  id="pdfSVG"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  fill="#fff"
                  version="1.1"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g id="Icon-Set-Filled" fill="#000">
                      <path
                        d="M189.031 111.069V6.177L68.398 126.817h104.884c11.336 0 15.749-4.413 15.749-15.748zM252.038 254.612c2.19-1.672 4.397-15.914 8.777-37.329 4.397-21.398-1.104-34.563-12.605-32.899-11.535 1.63-14.26 14.794-13.157 28.519 1.087 13.708 8.208 29.072 12.605 37.856 0 0 2.19 5.492 4.38 3.853zM198.258 365.431c-3.728 1.379-28.503 8.785-43.314 23.036-14.829 14.277-13.742 26.881-7.138 31.27 6.57 4.381 25.226-8.777 36.761-22.484 11.518-13.733 19.192-27.442 19.192-29.631 0-2.191-1.087-3.845-5.501-2.191zM239.45 341.835c10.934-4.38 50.436-13.174 50.436-13.174s-25.762-30.701-29.071-36.745c0 .001-15.363 40.031-21.365 49.919z"
                        className="st0"
                      ></path>
                      <path
                        d="M429.091 0h-216.74v125.104c0 13.8-11.234 25.043-25.026 25.043H62.498V491.58c0 11.259 9.161 20.42 20.411 20.42h346.182c11.25 0 20.411-9.161 20.411-20.42V20.404C449.502 9.152 440.342 0 429.091 0zm-66.769 380.77c-19.325-2.633-42.814-22.719-62.707-40.246-.586-.201-1.104-.318-1.488-.318-3.227 0-39.118 10.34-66.401 18.088-39.854 71.266-79.558 91.612-98.198 68.032-9.796-12.412-6.018-41.702 41.158-63.652 9.478-4.38 22.668-9.57 38.048-14.26 13.14-23.864 26.397-56.838 33.82-76.356-12.104-23.153-21.933-47.544-23.037-59.137-2.206-23.062 7.674-43.917 27.433-43.917 25.176 0 43.866 24.14 14.36 109.038 9.194 15.088 21.632 33.385 35.976 47.904 24.792-4.722 49.566-6.185 59.865-5.567 35.507 2.14 42.88 18.716 43.966 31.337 1.105 12.621-14.81 32.907-42.795 29.054z"
                        className="st0"
                      ></path>
                      <path
                        d="M358.478 331.947c-13.24-.853-47.728 3.836-43.9 5.474 0 0 27.984 19.786 44.417 21.959 16.5 2.19 22.535-4.932 22.535-12.062 0-7.138-6.035-14.268-23.052-15.371z"
                        className="st0"
                      ></path>
                    </g>
                  </g>
                </svg>
              </Link>

              <Link to="https://github.com/Victor-starr" target="_blank">
                <svg
                 id="githubSVG"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000"
                  stroke="#000"
                  version="1.1"
                  viewBox="0 0 20 20"
                >
                  <g>
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <g id="Icon-Set-Filled" fill="#000" transform="translate(-140 -7559)">
                        <g transform="translate(56 160)">
                          <path d="M94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051a9.396 9.396 0 00-2.505-.345 9.375 9.375 0 00-2.503.345c-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
          </section>
        </div>

        <div className="rightSide">
          <section className="content">
            <article className="container">
              <h2>My Story</h2>
              {/*TODO: dont forget to add <span className="HidenWords"> </span> on hiden words.  */}
              <p>
                I&apos;m a front-end web developer. Currently still a student in
                Softuni. Most people hate Javascript... I am one of
                them.I&apos;m a front-end web Currently still a student in
                Softuni. Most people hate Javascript... I am one of them.
              </p>
            </article>
            <article className="container">
              <h2>My Story</h2>
              {/*TODO: dont forget to add <span className="HidenWords"> </span> on hiden words.  */}
              <p>
                I&apos;m a front-end web developer. Currently still a student in
                Softuni. Most people hate Javascript... I am one of
                them.I&apos;m a front-end web Currently still a student in
                Softuni. Most people hate Javascript... I am one of them.
              </p>
            </article>
            <article className="container">
              <h2>My Story</h2>
              {/*TODO: dont forget to add <span className="HidenWords"> </span> on hiden words.  */}
              <p>
                I&apos;m a front-end web developer. Currently still a student in
                Softuni. Most people hate Javascript... I am one of
                them.I&apos;m a front-end web Currently still a student in
                Softuni. Most people hate Javascript... I am one of them.
              </p>
            </article>
          </section>

          <section className="container secNotCoding">
            <h4>When I am not Coding...</h4>
            <svg
            onClick={()=> ScrollRight()}
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

            <svg
            onClick={()=> ScrollLeft()}
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
                
                <img src={Gym} alt="gym" />
                <figcaption>Going gym</figcaption>
              </figure>
              <figure>
                <img src={Dog} alt="gym" />
                <figcaption>Take my dog</figcaption>
              </figure>
              <figure>
                <img src={Trav} alt="gym" />
                <figcaption>Travel</figcaption>
              </figure>
              <figure>
                <img src={IceSkate} alt="gym" />
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
