import React, { useState } from "react";
import "../CSS/Contact.css";
import axios from "axios";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import LightSpeed from "react-reveal/LightSpeed";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("please provide all fields");
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setName('');
        setEmail('');
        setMsg('');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact" id="contactid">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
                      alt="contact"
                      className="imgg"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Connect with
                      <FaLinkedin color="blue" size={20} className="ms-2" />
                      <BsGithub color="black" size={20} className="ms-2" />
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
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="email"
                      placeholder="write ur email"
                      className="mb-3"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="write ur msg here"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => {
                        setMsg(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row px-3">
                    <button
                      className="submit-btn"
                      type="SUBMIT"
                      onClick={handleSubmit}
                    >
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
