import React from "react";
import "../CSS/Menus.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import pic from "../Images/profilepic.jpeg";
import { FcAbout, FcBiotech, FcHome, FcPortraitMode } from "react-icons/fc";
import { MdCastForEducation, MdContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-scroll";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={pic} alt="profile pic" />
            </div>
          </Zoom>

          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="homeid"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome /> Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="aboutid"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout /> About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="eduid"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <MdCastForEducation /> Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="techid"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech /> Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <GrProjects /> Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode /> Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contactid"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <MdContactPhone /> Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="homeid"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome title="Home" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="aboutid"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout title="About" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="eduid"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdCastForEducation title="Education" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="techid"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech title="Techstack" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GrProjects title="Projects" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode title="Experience" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contactid"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdContactPhone title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
