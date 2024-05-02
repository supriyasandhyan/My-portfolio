import React from "react";
import Netflixproject from '../Images/Netflix-project.jpeg'
import apnauiproject from '../Images/apnaui-project.jpeg'
import LandingPage from '../Images/LandingPage.jpeg'
import "../CSS/Projects.css";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Website</span>
                  <img
                    src={Netflixproject}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJs</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Dummy Netfix Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    target="_blank"
                    href="https://github.com/supriyasandhyan/My-Netflix"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">UI/UX</span>
                  <img
                    src={apnauiproject}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React js</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Bootstrap</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Static Ui/Ux website</h6>
                  </div>
                  <a
                    className="ad-btn"
                    target="_blank"
                    href="https://github.com/supriyasandhyan/UI_Project"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Landing Page</span>
                  <img
                    src={LandingPage}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJs</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Nodejs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">SEO Landing Page</h6>
                  </div>
                  <a className="ad-btn"                     
                  target="_blank"
                  href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Projects;