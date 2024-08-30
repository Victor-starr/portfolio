
import Nav from "./_Nav";
// import { Link } from "react-router-dom";
import "./style/education.css";

function Education() {
  let type = 'default';
  let version = 1;

  function showCetf(typ){
    const certImg = document.querySelector('#certImg');
    const cetfHolder = document.querySelector('section.cetfHolder');
    cetfHolder.style.display = 'block';
    type = typ;
    setTimeout(() => {
      cetfHolder.classList.add('show');
    }, 10);
    version = 1;
    certImg.src = `./Soft_${typ}_v${version}.png`;

  }

  function turnCetf(){
    const certImg = document.querySelector('#certImg');
    certImg.classList.add('flip');
    setTimeout(() => {
        version = version === 1 ? 2 : 1;
        certImg.src = `./Soft_${type}_v${version}.png`;
        certImg.classList.remove('flip');
    }, 200);
    }
    
  
  function SoftUniWeb(){
    window.open("https://softuni.bg/diplomas-and-certificates");
  }
  return (
    <>
      <Nav/>
      <section className="pageHolder">

      <div className="leftSide">
            <h1>Education</h1>

            <section onClick={SoftUniWeb} className="container softuniInfo">
              <img src="./sotfuni.png" alt="softuni"/>
              <h2>SoftWare University
                <svg id="softuniLink" height="25px" width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
              </h2>
            </section>
            <section className="container cetfHolder">
             <div onClick={turnCetf} className="moreInfo">
              <p>More</p>
              <svg  id="infoBtn" fill="#000000" height="30px" width="30px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48.296 48.257" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M24.149,0C10.812,0,0,10.8,0,24.125c0,13.326,10.812,24.132,24.149,24.132c13.334,0,24.147-10.807,24.147-24.132 C48.296,10.8,37.483,0,24.149,0z M26.171,35.919c0,1.115-0.907,2.021-2.022,2.021c-1.12,0-2.025-0.908-2.025-2.021V22.507 c0-1.114,0.905-2.022,2.025-2.022c1.115,0,2.022,0.908,2.022,2.022V35.919z M26.171,15.101c0,1.119-0.907,2.022-2.022,2.022 c-1.12,0-2.025-0.903-2.025-2.022v-0.633c0-1.119,0.905-2.022,2.025-2.022c1.115,0,2.022,0.903,2.022,2.022V15.101z"></path> </g></svg>
             </div>
              <img id="certImg" alt="cetf"/>
            </section>
        </div>

        <div className="rightSide">
          
          <section className="content">
            <article onClick={()=> showCetf("bs")} className="container">
              <h2>JS Basics- September 2023</h2>
              {/*  TODO: dont forget to add <span className="HidenWords"> </span> on hiden words. */}
              <p>
                I&apos;m a front-end web developer. Currently still a student in
                Softuni. Most people hate Javascript... I am one of them.I&apos;m a
                front-end web Currently still a student in Softuni. Most people
                hate Javascript... I am one of them.
              </p>
            </article>
            <article onClick={()=> showCetf("fund")} className="container">
              <h2>JS Fundamentals- January 2024</h2>
               {/*  TODO: dont forget to add <span className="HidenWords"> </span> on hiden words. */}
              <p>
                I&apos;m a front-end web developer. Currently still a student in
                Softuni. Most people hate Javascript... I am one of them.I&apos;m a
                front-end web Currently still a student in Softuni. Most people
                hate Javascript... I am one of them.
              </p>
            </article>
            <article onClick={()=> showCetf("adv")} className="container">
              <h2>JS Advanced - May 2024</h2>
              {/*  TODO: dont forget to add <span className="HidenWords"> </span> on hiden words. */}
              <p>
                I&apos;m a front-end web developer. Currently still a student in
                Softuni. Most people hate Javascript... I am one of them.I&apos;m a
                front-end web Currently still a student in Softuni. Most people
                hate Javascript... I am one of them.
              </p>
            </article>
            <article onClick={()=> showCetf("app")} className="container">
              <h2>JS Applications - June 2024</h2>
              {/*  TODO: dont forget to add <span className="HidenWords"> </span> on hiden words. */}
              <p>
                I&apos;m a front-end web developer. Currently still a student in
                Softuni. Most people hate Javascript... I am one of them.I&apos;m a
                front-end web Currently still a student in Softuni. Most people
                hate Javascript... I am one of them.
              </p>
            </article>
          </section>
        </div>
      </section>
    </>
  )
}

export default Education
