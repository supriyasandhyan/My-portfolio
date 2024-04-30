import React from "react";
import "../CSS/Menus.css";
import pic from "../Images/profilepic.jpeg";
import { FcAbout, FcBiotech, FcHome, FcPortraitMode } from "react-icons/fc";
import { MdCastForEducation, MdContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={pic} alt="profile pic" />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome/> Home
              </div>
              <div className="nav-link">
                <FcAbout/> About
              </div>
              <div className="nav-link">
                <FcPortraitMode/> Experience
              </div>
              <div className="nav-link">
                <FcBiotech/> Tech Stack
              </div>
              <div className="nav-link">
                <MdCastForEducation/> Education
              </div>
              <div className="nav-link">
                <GrProjects/> Projects
              </div>
              <div className="nav-link">
                <MdContactPhone/> Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home"/>
              </div>
              <div className="nav-link">
                <FcAbout title="About"/>
              </div>
              <div className="nav-link">
                <FcPortraitMode title="Experience"/>
              </div>
              <div className="nav-link">
                <FcBiotech title="Techstack"/>
              </div>
              <div className="nav-link">
                <MdCastForEducation title="Education"/>
              </div>
              <div className="nav-link">
                <GrProjects title="Projects"/>
              </div>
              <div className="nav-link">
                <MdContactPhone title="Contact"/>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
