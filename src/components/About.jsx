import React from 'react'
import {MdEmail, MdWhatsapp} from 'react-icons/md'
import sait from '../assets/images/sait.svg'
import lac from '../assets/images/lac.webp'


const About = () => {
  return (
    <div class='contact-container'>
      <div class="container-item">
         <img className=' w-14 ' src={sait} alt="" />
        <div className="content-box">
           <h2 class='content-title'>Students' Association of Information Technology</h2>
           <p className='content-description'>
            SAIT, established in the 
            year 2003, is a club formed by the students of IT Department of 
            Walchand College of engineering, Sangli.
           </p>
           <h2 className='content'>wce.sait@walchandsangli.ac.in</h2>
        </div>
      </div>
      <div class="container-item">
         <img className=' w-14 ' src={lac} alt="" />
        <div className="content-box">
           <h2 class='content-title'>Lac Admin Committee, IT department</h2>
           <p className='content-description'>
              LAC, is the committee run by students from IT Department of WCE. Those who are skilled with computer hardware knowledge.
           </p>
           <h2 className='content'>Harshal Gawande:+91-9322585237</h2>
        </div>
      </div>
    </div>
  )
}

export default About