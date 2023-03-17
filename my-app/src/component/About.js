import React from "react";
import "./About.css"

import propfile from "../component/images/FB_IMG_1590262998033.jpg"

const About=()=>{
    return (
      <section className="about-section">
        <div className="container">
          <img src={propfile} alt="profile pic" />

          <div className="subcontainer ">
            <h2 className="head3">About me </h2>
            <p className="para">
              "Hello, my name is Lalatendu Pany, and I am a software developer
              who has recently graduated with a degree in Electronic and
              Telecommunication Engineer. I have a passion for creating
              efficient and innovative software solutions that solve real-world
              problems. My techincal skills include
              python,Javascript,Nodejs,React,Mongodb,Git, and I'm constantly
              learning and improving my abilities to stay up-to-date with the
              latest industry trends and best practices. Throughout my academic
              career, I have completed a number of challenging projects,
              including Dynamic Weather App, Usermanagement-app, Real-Estae app,
              and Personla protofoli-website , where I have gained valuable
              experience both forntend and Backend .I have also participated in
              coding competitions and hackathons, where I have honed my
              problem-solving skills and worked collaboratively with other
              developers. In my free time, I enjoy watching motivation viedo and
              playing online games , and I am always seeking new challenges and
              opportunities to expand my knowledge and skills. Thank you for
              taking the time to visit myportfolio website. I look forward to
              the opportunity to work with you."
            </p>
            <a href="/contact">Contact:Me</a>
          </div>

          
        </div>
      </section>
    );


};

export default About