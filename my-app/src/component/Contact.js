import React from "react"

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram} from "react-icons/fa";

import location from "../component/images/location.png"
import email from "../component/images/email.png"
import mobile from "../component/images/phone.png"


import "./Contact.css"
function Contact(){
    return (
      <div className="container1">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              "Hello and thank you for visiting my website! My name is Lalatendu
              Pany and I'm a Software developer Whether you're interested in
              discussing a potential project or any Job oppertunity in software
              developer filed , I'd love to hear from you. You can reach me by
              email or my personal conatct number . I typically respond to
              messages within 24 hours, so you can expect to hear back from me
              soon. Thank you again for your interest, and I look forward to
              connecting with you!"
            </p>

            <div className="info">
              <div className="information">
                <img src={location} className="icon" alt="" />
                <p>48,At-vn college square , Jajpur Road, Odisha</p>
              </div>
              <div className="information">
                <img src={email} className="icon" alt="" />
                <p>lalatendupany.2000@gmail.com</p>
              </div>
              <div className="information">
                <img src={mobile} className="icon" alt="" />
                <p>+91-9668414856</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="https://github.com/lalatendu65">
                  <FaGithub></FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/lalatendu-pany-2670521ab/">
                  <FaLinkedin></FaLinkedin>
                </a>
                <a href="https://www.facebook.com/lalatendu.pany?mibextid=ZbWKwL">
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://instagram.com/lalatendupany_12?igshid=MTA2NDdkNWE=">
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Contact