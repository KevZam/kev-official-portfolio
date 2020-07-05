import React from 'react';
import './Project.css'

function Project() {
  return (
    <div id="project">
      <div id="wrapper">
        <div id="image-holder">
        </div>
        <div id="project-details">
          <p id="project-field">Project</p>
          <h1 id="project-title">Project Title</h1>
          <p>Project Type</p>
          <p id="project-description">description description description description description description
          description description description description description description
            description description description description description description</p>
          <button className="project-button"><span>Video Demo</span></button>
          <button className="project-button-secondary"><span>Live Repo</span></button>
        </div>
      </div>
    </div>

  );
}

export default Project;
