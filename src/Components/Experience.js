import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../CSS/Experience.css";

const Experience = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="October 2021 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Associate Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Nimap Infotech
              </h4>
              <p className="work-content">
                <ul>
                  <li>
                    Working on various frontend technologies for developing
                    responsive dynamic Webpages in Projects
                  </li>
                  <li>Worked on HTML, CSS, Bootstrap, Js, ReactJs, Redux, Node technologies</li>
                  <li>Hands on Experienced on Rest Apis</li>
                </ul>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Associate Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Network18</h4>
              <p className="work-content">
                <ul>
                  <li>Network18 is client of Nimap Infotech </li>
                  <li>I am working here since September 2022</li>
                  <li>here I am responsible to work with NW18 & File18 client</li>
                  <li>working on React Technology , Wordpress, CMS tools as well.</li>
                </ul>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jun 2021 - Sep 2021"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Java Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                EduBridge Learning
              </h4>
              <p className="work-content">
                <ul>
                  <li>5 months of Internship</li>
                  <li>Technologies learned: HTML , CSS, JS, Bootstrap Core Java, Hibernate, Springboot, MySql</li>
                </ul>
              </p>
            </VerticalTimelineElement>
            
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
