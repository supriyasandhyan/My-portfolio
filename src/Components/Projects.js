import React from "react";
import "../CSS/Projects.css";

const Projects = () => {
  return (
    <>
      <div className="container project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recents Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          here are my top 3 recent project with live links and source code
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">full stack</span>
                <img
                  src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/ecommerce.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Mongodb</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Reactjs</span>
                <span className="card-detail-badge">Nodejs</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Techinfo shopping</h5>
                </div>
                <a className="ad-btn" href="#">
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
