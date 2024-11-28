import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Formations et Expériences professionnelles</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Formation Développeur web
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Openclassrooms
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Préparation du Diplome Supérieur de Comptabilité et Gestion (DSCG)
              <br></br>(non obtenu)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              2020 - 2023 Alternance Primo Conseil, Paris 1
            </h4>
            <h4>Apprenti collaborateur comptable</h4>
            <p>
              - Gestion et tenue de dossiers client<br></br>- Calcul et
              déclaration de TVA<br></br>- Relation client<br></br>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Diplome de Comptabilité et Gestion (DCG)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              2019 - 2020 Alternance Vitalrest, Saint-Germain-en-Laye
            </h4>
            <h4>Apprenti comptable</h4>
            <p>
              - Tenue de la comptabilité par sites <br></br> - Archivage
              <br></br> - Relance fournisseur<br></br> - Circularisation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2016"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              BTS Comptabilité et Gestion des Organisations
            </h3>
            <p>Paris VIIe</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BAC STMG</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mention assez bien
            </h4>
            <p>Sartrouville</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
