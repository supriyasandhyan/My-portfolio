import React from "react";
import "../CSS/Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook, BsGithub } from "react-icons/bs";


const Contact = () => {
  return (
    <>
      <div className="contact" id="contactid">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
                    alt="contact"
                    className="imgg"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>Connect with
                        <FaLinkedin color="blue" size={20} className="ms-2"/>
                        <BsGithub color="black" size={20} className="ms-2"/>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="write ur name"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="email"
                      placeholder="write ur email"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="write ur msg here"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="submit-btn" type="SUBMIT">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
