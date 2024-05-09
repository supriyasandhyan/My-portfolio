import React from "react";
import "../CSS/About.css";
import pic from "../Images/profilepic.jpeg";

const About = () => {
  return (
    <>
      <div className="about" id="aboutid">
        <div className="row about-row">
          <div className="col-md-4 col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={pic} alt="profile-pic" />
          </div>
          <div className="col-md-6 about-content">
            <h1>About me</h1>
            <p>
              I am Supriya Premraj Sandhyan, a fervent explorer of the digital
              realm, armed with a Bachelor's in Information Technology. As a React.js
              Developer, I craft captivating user interfaces and seamless
              interactions, transcending the ordinary to create elegant,
              user-centric designs. Delving into backend technologies like
              Node.js, I weave robust architectures that underpin the digital
              landscape. What sets me apart is not just my coding prowess, but
              also my creativity, adaptability, and collaborative spirit. Driven
              by a relentless pursuit of excellence, I am poised to make
              meaningful contributions to technology's ever-evolving tapestry.
              Whether pioneering cutting-edge applications, exploring emerging
              technologies, or leading impactful projects, I am ready to shape
              the future of the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
