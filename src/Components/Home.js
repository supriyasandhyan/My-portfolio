import React from "react";
import "../CSS/Home.css";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import resume from "../Images/SupriyaSandhyan.pdf";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="homeid">
        <div className="container home-content">
          <Fade top>
            <h2>Hi 🙋‍♀️ i'm a </h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "React js developer...!",
                    "fullstack developer ...!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>

          <Fade bottom>
            <div className="home-btns">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=8087987566"
                rel="noreferrer"
                target="_blank"
              >
                Hire me
              </a>
              
              <a href={resume} className="btn btn-cv" download="supriya.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
