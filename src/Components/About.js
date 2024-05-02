import React from "react";
import "../CSS/About.css";
import pic from "../Images/profilepic.jpeg";

const About = () => {
  return (
    <>
      <div className="about" id="aboutid">
        <div className="row about-row">
          <div className="col-md-4 about-img">
            <img src={pic} alt="profile-pic" />
          </div>
          <div className="col-md-6 about-content">
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              modi fugiat quis odio nihil obcaecati, enim asperiores nam, dolore
              error veniam! Aperiam magnam assumenda sunt repudiandae provident
              sed, facilis officiis! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Omnis optio at, sapiente et, explicabo vel
              accusamus maiores repellendus dolorum id praesentium aliquam
              maxime fugit laboriosam! Ipsam fuga doloribus animi laborum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
