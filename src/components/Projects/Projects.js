import React from 'react';
import Project from '../Project/Project';

function makeProjectsArray() {
  return [
    {
      id: 1,
      title: "YourPlaces",
      languages: "JavaScript, HTML, CSS, React, NodeJS, Express, REST API",
      description:
        "YourPlaces is a MERN full stack application that allows users to post their favorite places around the world. The application has a RESTful backend with full CRUD operations built with NodeJS. Users can also view each location on the map through the Google Maps API. ",
      imageLink: "/Documents/images/YourPlaces.PNG",
      repoLink: "https://github.com/KevZam/places-rest-api",
      liveDemo: "https://kev-mern.herokuapp.com/"
    },
    {
      id: 2,
      title: "Marvel Comics",
      languages: "JavaScript, HTML, CSS, jQuery",
      description:
        "The Marvel Comics application allows users to search for past and present Marvel comic books. Users can enter a date range and set a limit on how many comics to display. Additionally, comics are displayed with a title, date, image, and description. Users are shown error pages if images or responses do not load from the API calls.",
      imageLink: "/Documents/images/Marvel.PNG",
      repoLink: "https://github.com/WiFiCowboy/comicsApp",
      liveDemo: "https://wificowboy.github.io/comicsApp"
    },
    {
      id: 3,
      title: "Simon Says",
      languages: "JavaScript, HTML, CSS, jQuery",
      description:
        "A simon-says game where the user tries to memorize a sequence of colors and repeats after the computer.",
      imageLink: "/Documents/images/simon.PNG",
      repoLink: "https://github.com/KevZam/simon-says",
      liveDemo: "https://kevzam.github.io/simon-says/"
    },
    {
      id: 4,
      title: "Brilliant!",
      languages: "JavaScript, HTML, CSS, jQuery",
      description:
        "(COMING SOON) Brilliant is a weather app where any user can search for their city and get back their weather forecast by the hour.",
      imageLink: "",
      repoLink: "https://github.com/KevZam/weather-app",
      liveDemo: ""
    },
  ]
}

let project = makeProjectsArray();

let projects = project.map(project => {
  return <Project key={project.id} title={project.title} image={project.imageLink} languages={project.languages}
    description={project.description} link={project.liveDemo} repo={project.repoLink} />
})
function Projects() {
  return (
    <div id="projects">
      {projects}
    </div>

  );
}

export default Projects;
