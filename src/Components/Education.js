import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { IoMdSchool } from "react-icons/io";
import "react-vertical-timeline-component/style.min.css";
import "../CSS/Education.css";

const Education = () => {
  return (
    <>
      <div className="education" id="eduid">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2016 - 2020"
            iconStyle={{ background: '#138781', color: "white" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
            B.E IT
            </h3>
            <h4 className="vertical-timeline-element-subtitle">University of Mumbai</h4>
            <p className="cgpa-content">
            Percentage/CGPA: 7.01 CGPA
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2013 - 2015"
            iconStyle={{ background: '#138781', color: "white" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
            HSC
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Maharashtra State Board</h4>
            <p className="cgpa-content">
            Percentage/CGPA: 55%
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2012 - 2013"
            iconStyle={{ background: '#138781', color: "white" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
            SSC
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Maharashtra State Board</h4>
            <p className="cgpa-content">
             Percentage/CGPA: 84%
            </p>
          </VerticalTimelineElement>


        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
