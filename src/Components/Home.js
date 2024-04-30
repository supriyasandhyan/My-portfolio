import React from "react";
import "../CSS/Home.css";
import Typewriter from 'typewriter-effect';
import resume from '../Images/SupriyaSandhyan.pdf'

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi 🙋‍♀️ i'm a </h2>
          <h1>
            <Typewriter
              options={{
                strings: ["React js developer...!" , "fullstack developer ...!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-btns">
            <button className="btn btn-hire">Hire me</button>
            <a href={resume} className="btn btn-cv" download='supriya.pdf'>My Resume</a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
