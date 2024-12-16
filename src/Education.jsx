// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect, useRef } from "react";
import { differenceInDays,differenceInMonths, differenceInYears } from "date-fns";
import Nav from "./_Nav";
import "./style/education.css";
import CetfContent, { FinalTyp } from "./CetfContent";
function Education() {
  const [jsonData, setJsonData] = useState([]);
  const [imgFace, setImgFace] = useState('imgfront');
  const previousFinalTypRef = useRef(FinalTyp); 

  function turnCetf() {
    const certImg = document.querySelector("#certImg");
    const currentCert = jsonData.find(cert => cert.key === FinalTyp);
    if (!currentCert) return;
    

    certImg.classList.add("flip");
    setTimeout(() => {
      setImgFace((v) => v === 'imgfront' ? 'imgback' : 'imgfront');
      certImg.src = imgFace === 'imgfront' ? currentCert.imgback : currentCert.imgfront;
      certImg.classList.remove("flip");
    }, 200);
  }

  const pageHolder = document.querySelector('main > section');
  useEffect(() => {
    const softuniInfo = document.querySelector('.softuniInfo');
    const contentsSliper = document.querySelectorAll('article.container');

    setTimeout(() => {
      softuniInfo.classList.add('slide-in-blurred-left');
      contentsSliper.forEach((x) => {x.classList.add('slide-in-blurred-right');});
    }, 1000);
  }, [pageHolder]);

  for (const cetf of jsonData) {
    const today = new Date();
    const date = new Date(cetf.dateAgo); 

    if (isNaN(date.getTime())) {
      continue;
    }
    const daysDiff = differenceInDays(today, date);
    const monthsDiff = differenceInMonths(today, date);
    const yearsDiff = differenceInYears(today, date);

    if (daysDiff < 30) {
      cetf.dateAgo = `${daysDiff} days ago`;
    }else if (monthsDiff < 12) {
      cetf.dateAgo = `${monthsDiff} months ago`;
    } else {
      cetf.dateAgo = `${yearsDiff} years ago`;
    }
  }

  useEffect(() => {
    const url = "https://docs.google.com/spreadsheets/d/1DcQ9CjLcPL-vgxm4oIIpKzV5vQEZMsZa0xyYvq2WypA/export?format=csv";
  
    function csvToJson(csv) {
      const lines = csv.trim().split("\n");
      const headers = lines[0].split(",");
      const result = [];
  
      for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(",");
  
        headers.forEach((header, index) => {
          obj[header.trim()] = currentLine[index] ? currentLine[index].trim() : "";
        });
  
        result.push(obj);
      }
  
      return result;
    }
  
    fetch(url)
      .then(response => response.text())
      .then(csvData => {
        const jsonDataTemp = csvToJson(csvData); 
        setJsonData(jsonDataTemp);
      })
      .catch(error => console.error("Error fetching or parsing data:", error));

      const interval = setInterval(() => {
        if (previousFinalTypRef.current !== FinalTyp) {
          previousFinalTypRef.current = FinalTyp; 
          setImgFace('imgfront'); 
        }
      });
  
      return () => clearInterval(interval);
  
  }, []); 
  

  function SoftUniWeb() {
    window.open("https://softuni.bg/diplomas-and-certificates");
  }
  function showCetfUrl(){
    const moreInfo = document.querySelector('.moreInfo');
    window.open(moreInfo.dataset.url);
  }

  return (
    <>
      <Nav />
      <section className="pageHolder">
        <div className="leftSide">
          <h1>Education</h1>
          <section onClick={SoftUniWeb} className="container softuniInfo">
            <img src="./sotfuni.png" alt="softuni" loading="lazy" />
            <h2>
              SoftWare University
              <svg
                id="softuniLink"
                height="25px"
                width="25px"
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
                  <g id="Interface / External_Link">
                    {" "}
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </h2>
          </section>
          <section className="container cetfHolder">
            <div onClick={showCetfUrl} className="moreInfo">
              <p>More</p>
              <svg id="infoBtn" fill="#000000" height="30px" width="30px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48.296 48.257" xmlSpace="preserve" > <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" ></g> <g id="SVGRepo_iconCarrier"> {" "} <path d="M24.149,0C10.812,0,0,10.8,0,24.125c0,13.326,10.812,24.132,24.149,24.132c13.334,0,24.147-10.807,24.147-24.132 C48.296,10.8,37.483,0,24.149,0z M26.171,35.919c0,1.115-0.907,2.021-2.022,2.021c-1.12,0-2.025-0.908-2.025-2.021V22.507 c0-1.114,0.905-2.022,2.025-2.022c1.115,0,2.022,0.908,2.022,2.022V35.919z M26.171,15.101c0,1.119-0.907,2.022-2.022,2.022 c-1.12,0-2.025-0.903-2.025-2.022v-0.633c0-1.119,0.905-2.022,2.025-2.022c1.115,0,2.022,0.903,2.022,2.022V15.101z"></path>{" "} </g> </svg>
            </div>
            <img onClick={turnCetf} id="certImg"  src='' alt="cetf" loading="lazy" />
          </section>
        </div>

        <div className="rightSide">
          <section className="content">
          {jsonData.map(value => (
              <CetfContent
                key={value.key}
                type={value.key}
                title1={`${value.title} - ${value.date}`}
                title2={value.dateAgo}
                description={value.description}
                imgFront = {value.imgfront}
                Cetfurl = {value.url}
                />
              ))}
          </section>
        </div>
      </section>
    </>
  );
}

export default Education;
