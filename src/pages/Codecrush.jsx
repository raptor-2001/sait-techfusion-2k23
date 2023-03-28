import React, { useEffect } from 'react'
import '../scss/event.scss' 
import {IoMdArrowRoundBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import trophy from '../assets/images/trophy.webp'

const Codecrush = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
  
      // Clean up function
      return () => {
        window.scrollTo(0, 0);
      };
    }, []);
  
  return (
<>
   <div class="login-box">
      <form>  
         <a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc3jKL6r4KznEZSFEK4_A3KglJA1iPkOeNClKHY-J1b9C3z2A/viewform">
         <span></span>
         <span></span>
         Register
         <span></span><span></span>
         </a>
      </form>
   </div>
   <Link to="/">
         <IoMdArrowRoundBack/>
   </Link>
   <div className='event-box'>
      <div className="event-header">
         <h2 className='event-title'>CodeCrush</h2>
      </div>
      <div className="event-detail">
         <div className="event-rules">
            <h5 className='text-rule text-center p-6'>Rules</h5>
            <ul className="rule-ul">
               <li className="rule-li">
               Contest will be conducted in online mode on HackerRank
               </li>
               <li className="rule-li">
               Contest has two tracks Novice and Expert. Novice consist of FY : Degree & FY, SY : Diploma 
               </li>
               <li className="rule-li">
               Expert has SY, TY and Final Year: Degree & TY : Diploma
               </li>
               <li className="rule-li">
               Duration of contest will be 2 hours
               </li>
               <li className="rule-li">
               The top four performers will receive prizes, with a special recognition awarded to the top female participant
               </li>
               <li className="rule-li">
                  For more details please check out the rule book <a className='rule-link' target="_blank" href='https://drive.google.com/drive/folders/1t_SPtlBTfWi1dPMP2RD04LOl8TGlC59p?usp=sharing'>Techfuison2k23 Rule book</a>
               </li>
            </ul>
         </div>
         <div className="event-prizes">
          <img src={trophy} alt="" />
          <h3 className="prize-amount text-center">Prizes will be disclosed soon in a week</h3>
         </div>
      </div>
      
      <h3
      class=" mt-6 mb-6 mr-5 text-2xl text-center text-neutral-700 dark:text-neutral-300">
      Event Timeline
      </h3>
      <div className="timeline flex justify-center">
      <h3
      class="mb-6 mr-5 text-2xl font-bold text-neutral-700 dark:text-neutral-300">      </h3>
         <ol class=" border-l-2 border-info-100">
         <li>
            <div class="flex-start  md:flex ">
               <div
               class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-4 w-4">
                  <path
                     fill-rule="evenodd"
                     d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                     clip-rule="evenodd" />
               </svg>
               </div>
               <div
               class="ml-6 mb-10 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
               <div class="mb-4 flex justify-between">
               
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700 mr-5"
                     >Online Contest time</a
                  >
                  
               </div>
               <div class="mb-4 flex justify-between">
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700 mr-5"
                     >3nd April 2023</a
                  >
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >8:00 PM</a
                  >
               </div>
              </div>
            </div>
         </li>
         </ol>
      </div>
  </div>
</>
  )
}

export default Codecrush