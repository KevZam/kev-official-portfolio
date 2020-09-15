import React from 'react';
import './Project.css'

function Project(props) {
  return (
    <div id="project">
      <div id="wrapper">
        <img src={props.image} id="image-holder" alt="project">
        </img>
        <div id="project-details">
          <p id="project-field">Project</p>
          <h1 id="project-title">{props.title}</h1>
          <p>{props.languages}</p>
          <p id="project-description">{props.description}</p>
          <div id="buttons">
            {props.link && <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button className="project-button">
                <span>Live</span>
              </button>
            </a>}

            <a href={props.repo} target="_blank" rel="noopener noreferrer">
              <button className="project-button-secondary">
                <span>Repo</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Project;
