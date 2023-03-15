import React from 'react'
import { MdOutlineCopyright } from 'react-icons/md'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import sait from '../assets/images/sait.svg'

const Footer = () => {
  return (
    <>
          <div class="footer-container">
        
            <div class="footer-item">
                <h2 className='footer-title'>EVENT RESOURCES</h2>
                <ul className="footer-link">
                    <li>
                         <a target="blank" href="https://drive.google.com/file/d/1th-wp5BwbtxPJmPzfjaARg_Zc1IKebBV/view?usp=sharing" class="footerlinks" > Sponsorship Broucher</a>
                    </li>
                    <li>
                        <a class="footerlinks" href="#"> Techfusion2k23 Rule Book</a>
                    </li>
                </ul>
                
            </div>

            <div class="footer-item">
                <h2 className='footer-title'>ADDRESS</h2>
                  <p className='footer-address'>
                      Walchand College of Engineering
                      <br />
                      Sangli, Maharastra, 
                      <br />
                      India
                      <br />
                      Pin Code - 416415
                  </p>
            </div>

            <div class="footer-item">
                <h2 className='footer-title'>STAY CONNECTED</h2>
                <ul class="footer-ul-icon">
                    <li className='footer-icon'>
                       <a target="_blank" href="https://react-icons.github.io/react-icons/search?q=ins">
                         <FaLinkedinIn className='icon'/>
                       </a>
                    </li>
                    <li className='footer-icon'>
                      <a target="_blank" href="https://react-icons.github.io/react-icons/search?q=ins">
                          <BsInstagram className='icon'/>
                      </a>
                    </li>
                </ul>
            </div>

        </div>
        <div class="copyright">
            Copyright{<MdOutlineCopyright className='copy'/>}2023 Alrights are reserved to SAIT
        </div>
        
    </>
  )
}

export default Footer