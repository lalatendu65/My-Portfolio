import React from "react";

import "./Exprience.css"

import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Saraswati Shishu Vidyamandir, Jajpur Road, Odisha
          </h3>
          <p> High School </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Excelsior+2 sceiece college , Jajpur Road, Odisha
          </h3>
          <p> Senior Secondary School  </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Indira Gandhi Institute  Of Technology,Sarang ,Dhenkanal ,Odisha
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Electronic and Telecommunication Engineer </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11 April 2022 - 29 December 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Backend Developer - Publicis Sapient
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bengaluru ,India
          </h4>
          <p>Developed the backend infrastructure for 3 projects.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022-January 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full stack Developent Bootcamp ,10X Academy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hydrabad, India
          </h4>
          <p>
            In 6 Months i leraned on DSA(Python),frontend(Html,css,React js) And
            Backend(Javascript,Nodejs,Mongodb,Postman)
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;