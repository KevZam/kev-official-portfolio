import React from 'react';
import Project from '../Project/Project';

function makeProjectsArray() {
  return [
    {
      id: 1,
      title: "First test post!",
      languages: "How-to",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
      imageLink: "/Documents/images/examplePicture.jpg",
      repoLink: "https://www.w3schools.com",
      liveDemo: "https://www.w3schools.com"
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
