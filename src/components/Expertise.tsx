import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGithub,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faNode,
  faPython,
  faVuejs,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/Expertise.scss";

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>A propos</h1>
        <p>
          Issu d'une formation comptable, j'ai suivi la formation de développeur
          web auprès d'Openclassrooms. Amoureux des challenges et nouveau dans
          le monde du développement, j'ai hate d'enrichir mes compétences et de
          relever les défis qui se présenteront à moi !
        </p>
        <div className="skills-grid">
          <div className="skill">
            <h1>Compétences acquises</h1>
            <div className="svg-container">
              <span>
                <FontAwesomeIcon icon={faReact} size="3x" />
                <p>React</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <p>GitHub</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <p>HTML5</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faCss3} size="3x" />
                <p>CSS3</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faSass} size="3x" />
                <p>Sass</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faJs} size="3x" />
                <p>JavaScript</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faNode} size="3x" />
                <p>Node.js</p>
              </span>
            </div>
          </div>

          <div className="skill">
            <h1>Compétences visées</h1>
            <div className="svg-container">
              <span>
                <FontAwesomeIcon icon={faPython} size="3x" />
                <p>Python</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faVuejs} size="3x" />
                <p>Vue.js</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faPhp} size="3x" />
                <p>PHP</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
