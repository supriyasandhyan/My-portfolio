import React, { useState } from "react";
import "../CSS/MobileNav.css";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FcAbout, FcBiotech, FcHome, FcPortraitMode } from "react-icons/fc";
import { MdCastForEducation, MdContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClick = () =>{
    setOpen(false);
  }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <RxCross1
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <MdMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio app</span>
        </div>

        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="homeid"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <MdContactPhone /> Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
