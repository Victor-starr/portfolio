import Nav from "./_Nav";
import "./style/project.css";
import ProjectDisplay from "./ProjectDisplay.jsx";
import { useState } from "react";

const project = {
  tastylist: {
    title: "Tasty-List",
    description:
      "Tasty-List is a web app for organizing, managing, and sharing your favorite recipes. Create collections, add instructions and images, and share with friends or the public. Perfect for meal planning and discovering new dishes.",
    image: "./tastylistBanner.png",
    demo: "https://tasty-list.vercel.app",
    github: "https://github.com/Victor-starr/tasty-list",
  },
  deezerStarr: {
    title: "Deezer-Starr",
    description:
      "Deezer-Starr is a music streaming app to search, discover, and play songs from a vast library. Curate playlists, explore trending tracks, and enjoy a sleek, responsive design. Built for fast search and a great listening experience.",
    image: "./deezerstarrBanner.png",
    demo: "https://deezer-starr.vercel.app",
    github: "https://github.com/Victor-starr/deezer-starr",
  },
  tableStarr: {
    title: "Table-Starr",
    description:
      "Table-Starr helps you and your friends keep track of orders and split the bill easily—perfect for going out to eat or sharing expenses.",
    demo: "https://table-starr.vercel.app/",
    github: "https://github.com/Victor-starr/Table-Starr",
    image: "./tableStarrBanner.png",
  },
};

export default function Project() {
  const [projectData, setProjectData] = useState(project.tastylist);

  return (
    <>
      <Nav />
      <section className="pageHolder">
        <div className="leftSide">
          <h1>My Projects</h1>
          {projectData && (
            <ProjectDisplay
              image={projectData.image}
              title={projectData.title}
              description={projectData.description}
              demo={projectData.demo}
              github={projectData.github}
            />
          )}
        </div>
        <div className="rightSide">
          <section className="content">
            <article
              className="slide-in-blurred-right container"
              onClick={() => setProjectData(project.tastylist)}
            >
              <h2>Tasty-List</h2>
              <p>
                A web application that allows users to create, manage, and share
                their favorite recipes.
              </p>
            </article>
            <article
              className="slide-in-blurred-right container"
              onClick={() => setProjectData(project.deezerStarr)}
            >
              <h2>Deezer-Starr</h2>
              <p>
                A music streaming application that allows users to search and
                play their favorite songs.
              </p>
            </article>
            <article
              className="slide-in-blurred-right container"
              onClick={() => setProjectData(project.tableStarr)}
            >
              <h2>Table-Starr</h2>
              <p>
                A web application designed to help users keep track of their
                orders and split the bill with friends.
              </p>
            </article>
          </section>
        </div>
      </section>
    </>
  );
}
