import React, { useEffect } from 'react'
import '../scss/event.scss' 
import {IoMdArrowRoundBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import trophy from '../assets/images/trophy.webp'

const Podium = () => {
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
         <a target="blank" href="https://forms.gle/RXitBX3zREwiyKxM7">
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
         <h2 className='event-title'>Podium</h2>
      </div>
      <div className="event-detail">
         <div className="event-rules">
            <h5 className='text-rule text-center p-6'>Rules</h5>
            <ul className="rule-ul">
               <li className="rule-li">
                  Image Opinion Round 1 is a mandatory round for all participants to qualify for Round 2.
               </li>
               <li className="rule-li">
                  For round 2, a group of 3 participants will be formed.
                  The group will debate and tell their opinion on the topic
               </li>
               <li className="rule-li">
                  Open for all
               </li>
               <li className="rule-li">
                  For more details please check out the rule book <a className='rule-link' target="_blank" href='https://drive.google.com/drive/folders/1t_SPtlBTfWi1dPMP2RD04LOl8TGlC59p?usp=sharing
'>Techfuison2k23 Rule book</a>
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
                     >Reporting Time</a
                  >
                  
               </div>
               <div class="mb-4 flex justify-between">
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700 mr-5"
                     >1st April 2023</a
                  >
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >10:00 AM</a
                  >
               </div>
              </div>
            </div>
         </li>
         <li>
            <div class="flex-start md:flex">
               <div
               class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  view:Box="0 0 24 24"
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
                     >Round 1 : Image Opinion</a
                  >
                  
               </div>
               <div class="mb-4 flex justify-between">
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700 mr-5"
                     >1st April 2023</a
                  >
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >10:30 AM</a
                  >
               </div>
              </div>
            </div>
         </li>
         <li>
            <div class="flex-start md:flex">
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
                     >Round 2 : Group Debate</a
                  >
                  
               </div>
               <div class="mb-4 flex justify-between">
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700 mr-5"
                     >1st April 2023</a
                  >
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >3:00 PM</a
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

export default Podium