import React from 'react';
import Me from '../../img/me.png'
import './intro.css';
const Intro = () => {
  return (
    <div className='i'>


        <div className="i-left">
          <div className="i-left-wrapper">

            <h2 className="i-intro">Hello, My name is </h2>
            <h1 className="i-name">Dipanshu</h1>

            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Learner</div>
                <div className="i-title-item">Programmer</div>
                <div className="i-title-item">Student</div>

              </div>
            </div>

            <p className="i-desc">
            I'm currently a final year student majoring in Electronics And Communication Engineering at Delhi Technological University.I have a good hold on Data Structures and Algorithms in C++. Besides having a keen interest in Web Development.
            </p>
          </div>
          
        </div> 

        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro