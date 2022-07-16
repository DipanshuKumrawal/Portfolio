import React from 'react'
import './about.css'
import Award from "../../img/cv.png";
import cv from "../../img/cv.pdf"
import portfolio from "../../img/portfolio.png"
const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"> </div>
            <div className="a-card">
                <img src={portfolio} alt="" className='a-img'/>
            </div>
        </div>



        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Passionately curious about coding. Currently learning, there's yet more to learn
        </p>
        <p className="a-desc">
          I pursued my schooling from Rishabh Public School and passed out in 2019 and started pursuing Bachelor of Technology in Electronics And Communication Engineering From Delhi Technological University . I have a keen interest in programming. Therefore, I took minor in Information and Technology.
        </p>
        <div className="a-award">
          <a href={cv} download='cv.pdf'>
            <div className='cv-bg'>
              <img src={Award} alt="" className="a-award-img" />
            </div>
          </a>

          <div className="a-award-texts">
            <h4 className="a-award-title">Download CV by clicking the image</h4>
          </div>
        </div>



        </div>
    </div>
  )
}

export default About