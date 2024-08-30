// import React,{useState,useEffect} from 'react'
import Nav from "./_Nav.jsx";
import "./style/resume.css";
function Resume() {
  // function donwload a file 
  function download(){
    window.open('../public/cv-bg-26.pdf'); // PATH TO THE PDF CV FILE 
  }
  return (
    <>
      <Nav />
      <section className="pageHolder">

        <section className="resumeCover">

          <button className="download" onClick={download}>
            Download Resume
            <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="download" className="icon glyph" > <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" ></g> <g id="SVGRepo_iconCarrier"> <path d="M20,15a1,1,0,0,0-1,1V20a.22.22,0,0,1-.15.05H5.14C5.06,20,5,20,5,20V16a1,1,0,0,0-2,0v4a2.08,2.08,0,0,0,2.14,2H18.86A2.08,2.08,0,0,0,21,20V16A1,1,0,0,0,20,15Z"></path> <path d="M11.29,16.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,13.59V3a1,1,0,0,0-2,0V13.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"></path> </g> </svg>
          </button>
          <div>
          <img src="../public/svImgTemp.png" alt="" />
          </div>
        </section>

      </section>
    </>
  );
}

export default Resume;
