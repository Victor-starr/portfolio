
// Import dependencies and components
import Nav from "./_Nav";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./style/about.css";

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
              <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>
              </span>
              <span>
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"></path> <path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"></path> </g></svg>
              </span>
              <span>
              <svg viewBox="0 -32 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#CD6799"> <path d="M220.281239,110.513661 C211.374863,110.560291 203.634244,112.705282 197.152641,115.876138 C194.774499,111.166485 192.396357,106.969763 191.976685,103.892168 C191.510383,100.301639 190.95082,98.1100182 191.510383,93.8200364 C192.069945,89.5300546 194.587978,83.4214936 194.541348,82.9551913 C194.494718,82.4888889 193.981785,80.2972678 188.852459,80.2506375 C183.723133,80.2040073 179.29326,81.2298725 178.780328,82.5821494 C178.267395,83.9344262 177.28816,87.0120219 176.635337,90.182878 C175.749362,94.8459016 166.376685,111.492896 161.014208,120.21275 C159.288889,116.808743 157.796721,113.824408 157.47031,111.446266 C157.004007,107.855738 156.444444,105.664117 157.004007,101.374135 C157.56357,97.084153 160.081603,90.975592 160.034973,90.5092896 C159.988342,90.0429872 159.47541,87.8513661 154.346084,87.8047359 C149.216758,87.7581056 144.786885,88.7839709 144.273953,90.1362477 C143.76102,91.4885246 143.201457,94.6593807 142.128962,97.7369763 C141.056466,100.814572 128.606193,128.606193 125.342077,135.78725 C123.663388,139.471038 122.217851,142.408743 121.191985,144.413843 L121.191985,144.413843 C121.191985,144.413843 121.145355,144.553734 121.005464,144.786885 C120.11949,146.512204 119.606557,147.444809 119.606557,147.444809 C119.606557,147.444809 119.606557,147.444809 119.606557,147.491439 C118.907104,148.750455 118.16102,149.916211 117.787978,149.916211 C117.508197,149.916211 116.995264,146.558834 117.881239,141.989071 C119.746448,132.336612 124.176321,117.321676 124.12969,116.808743 C124.12969,116.528962 124.969035,113.917668 121.238616,112.565392 C117.601457,111.213115 116.295811,113.451366 115.969399,113.451366 C115.642987,113.451366 115.409836,114.24408 115.409836,114.24408 C115.409836,114.24408 119.466667,97.3639344 107.669217,97.3639344 C100.301639,97.3639344 90.1362477,105.430965 85.1001821,112.705282 C81.929326,114.430601 75.1679417,118.11439 67.940255,122.07796 C65.189071,123.616758 62.3446266,125.155556 59.6867031,126.601093 C59.5001821,126.414572 59.3136612,126.181421 59.1271403,125.9949 C44.8582878,110.746812 18.4655738,99.9752277 19.5846995,79.5045537 C20.0043716,72.0437158 22.5690346,52.4590164 70.2717668,28.6775956 C109.534426,9.32604736 140.776685,14.6885246 146.185792,26.579235 C153.926412,43.5526412 129.445537,75.0746812 88.8772313,79.6444444 C73.3959927,81.3697632 65.2823315,75.4010929 63.2306011,73.1628415 C61.0856102,70.8313297 60.7591985,70.691439 59.9664845,71.1577413 C58.6608379,71.8571949 59.5001821,73.9555556 59.9664845,75.1679417 C61.1788707,78.3387978 66.168306,83.9344262 74.6083789,86.6856102 C82.0692168,89.1103825 100.208379,90.4626594 122.17122,81.9759563 C146.745355,72.463388 165.957013,46.0240437 160.314754,23.8746812 C154.672495,1.3989071 117.368306,-6.01530055 82.0692168,6.52823315 C61.0856102,13.989071 38.3300546,25.7398907 21.9628415,41.0346084 C2.51803279,59.2204007 -0.559562842,75.028051 0.699453552,81.6495446 C5.22258652,105.151184 37.6306011,120.445902 50.5938069,131.777049 C49.9409836,132.150091 49.3347905,132.476503 48.8218579,132.756284 C42.340255,135.97377 17.6262295,148.890346 11.4710383,162.553005 C4.47650273,178.034244 12.5901639,189.13224 17.9526412,190.624408 C34.5996357,195.240801 51.7129326,186.940619 60.8990893,173.23133 C70.0852459,159.52204 68.9661202,141.70929 64.7227687,133.548998 C64.6761384,133.455738 64.6295082,133.362477 64.5362477,133.269217 C66.2149362,132.289982 67.940255,131.264117 69.6189435,130.284882 C72.9296903,128.326412 76.1938069,126.507832 78.9916211,125.015665 C77.4061931,129.352277 76.2404372,134.528233 75.6808743,141.989071 C74.9814208,150.755556 78.571949,162.133333 83.2816029,166.609836 C85.3799636,168.568306 87.8513661,168.614936 89.4367942,168.614936 C94.9391621,168.614936 97.4105647,164.045173 100.161749,158.636066 C103.519126,152.014572 106.550091,144.320583 106.550091,144.320583 C106.550091,144.320583 102.773042,165.117668 113.031694,165.117668 C116.762113,165.117668 120.539162,160.268124 122.217851,157.796721 L122.217851,157.843352 C122.217851,157.843352 122.311111,157.703461 122.497632,157.377049 C122.870674,156.770856 123.103825,156.397814 123.103825,156.397814 L123.103825,156.304554 C124.595993,153.69326 127.95337,147.77122 132.942805,137.93224 C139.377778,125.248816 145.579599,109.394536 145.579599,109.394536 C145.579599,109.394536 146.139162,113.264845 148.051002,119.699818 C149.170128,123.476867 151.501639,127.626958 153.366849,131.637158 C151.874681,133.735519 150.942077,134.901275 150.942077,134.901275 C150.942077,134.901275 150.942077,134.901275 150.988707,134.947905 C149.776321,136.533333 148.470674,138.258652 147.025137,139.937341 C141.942441,145.999271 135.88051,152.947177 135.041166,154.952277 C134.061931,157.330419 134.295082,159.055738 136.160291,160.454645 C137.512568,161.48051 139.937341,161.620401 142.408743,161.48051 C146.978506,161.154098 150.195993,160.034973 151.781421,159.335519 C154.252823,158.449545 157.143898,157.097268 159.848452,155.092168 C164.837887,151.408379 167.868852,146.139162 167.589071,139.191257 C167.44918,135.367577 166.190164,131.543898 164.651366,127.95337 C165.117668,127.300546 165.537341,126.647723 166.003643,125.9949 C173.884153,114.477231 179.992714,101.840437 179.992714,101.840437 C179.992714,101.840437 180.552277,105.710747 182.464117,112.145719 C183.396721,115.409836 185.308561,118.953734 186.98725,122.404372 C179.573042,128.419672 175.003279,135.414208 173.37122,139.983971 C170.433515,148.470674 172.718397,152.294353 177.055009,153.180328 C179.013479,153.6 181.811293,152.667395 183.863024,151.781421 C186.474317,150.942077 189.551913,149.496539 192.489617,147.351548 C197.479053,143.66776 202.281967,138.538434 202.002186,131.590528 C201.862295,128.419672 201.022951,125.295446 199.857195,122.264481 C206.152277,119.653188 214.265938,118.20765 224.617851,119.420036 C246.813843,122.03133 251.197086,135.88051 250.357741,141.70929 C249.518397,147.538069 244.855373,150.708925 243.316576,151.68816 C241.777778,152.667395 241.264845,152.993807 241.404736,153.69326 C241.591257,154.719126 242.337341,154.672495 243.642987,154.485974 C245.461566,154.159563 255.300546,149.776321 255.720219,139.051366 C256.419672,125.342077 243.363206,110.37377 220.281239,110.513661 L220.281239,110.513661 Z M49.0550091,168.241894 C41.6874317,176.262295 31.4287796,179.29326 26.9989071,176.728597 C22.242623,173.977413 24.1078324,162.133333 33.1540984,153.64663 C38.6564663,148.470674 45.7442623,143.66776 50.4539162,140.730055 C51.5264117,140.077231 53.1118397,139.144627 55.0236794,137.978871 C55.3500911,137.79235 55.536612,137.699089 55.536612,137.699089 L55.536612,137.699089 C55.9096539,137.465938 56.2826958,137.232787 56.6557377,136.999636 C59.9664845,149.123497 56.7956284,159.801821 49.0550091,168.241894 L49.0550091,168.241894 Z M102.679781,131.777049 C100.115118,138.025501 94.7526412,154.019672 91.4885246,153.133698 C88.6907104,152.387614 86.9653916,140.263752 90.9289617,128.279781 C92.9340619,122.264481 97.1774135,115.083424 99.648816,112.28561 C103.659016,107.809107 108.088889,106.31694 109.161384,108.135519 C110.513661,110.513661 104.265209,127.860109 102.679781,131.777049 L102.679781,131.777049 Z M146.931876,152.947177 C145.859381,153.50674 144.833515,153.879781 144.367213,153.6 C144.040801,153.413479 144.833515,152.667395 144.833515,152.667395 C144.833515,152.667395 150.382514,146.698725 152.574135,143.994171 C153.833151,142.408743 155.325319,140.543534 156.910747,138.445173 L156.910747,139.051366 C156.910747,146.185792 150.009472,150.988707 146.931876,152.947177 L146.931876,152.947177 Z M181.065209,145.159927 C180.272495,144.600364 180.412386,142.735155 183.07031,136.906375 C184.096175,134.621494 186.520947,130.797814 190.671038,127.114026 C191.137341,128.606193 191.463752,130.05173 191.417122,131.404007 C191.370492,140.403643 184.935519,143.76102 181.065209,145.159927 L181.065209,145.159927 Z"> </path> </g> </g></svg>
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
