import React from 'react'
import '../scss/event.scss'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import trophy from '../assets/images/trophy.webp'

const Duocoding = () => {
  return (
<>
   <div class="login-box">
      <form>  
         <a target="blank" href="https://forms.gle/wUMeoCSBSqsxzHPj6">
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
   <main className='event-box'>
      <div className="event-header">
         <h2 className='event-title'>CodeDuet</h2>
      </div>
      <div className="event-detail">
         <div className="event-rules">
            <h5 className='text-rule text-left p-6'>Rules</h5>
            <ul className="rule-ul">
               <li className="rule-li">
                  Rule#1: Contest will be conducted in three rounds and each will be an elimination round. 
               </li>
               <li className="rule-li">
                  Rule#2: Round 1 will be conventional coding contest held on HackerRank.
               </li>
               <li className="rule-li">
                  Rule#3: Round 2 will be reverse coding round held on HackerRank. Details of round are mentioned in the Rule Book.
               </li>
               <li className="rule-li">
                  Rule#4: Round 3 will be debugging contest. Further details will be shared on the spot.
               </li>
            </ul>
         </div>
         <div className="event-prizes">
          <img src={trophy} alt="" />
          <h3 className="prize-amount text-center">Will be disclosed soon.</h3>
         </div>
      </div>
      <div className="timeline">
      <h3
      class="mb-6 ml-3 text-2xl font-bold text-neutral-700 dark:text-neutral-300">
      Event Timeline
      </h3>

         <ol class="border-l-2 border-info-100">
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
                     >Round 1 : Conventinal Coding</a
                  >
                  
               </div>
               <div class="mb-4 flex justify-between">
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >1st April 2023</a
                  >
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >2:00 PM</a
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
                     >Round 2 : Reverse Coding</a
                  >
                  
               </div>
               <div class="mb-4 flex justify-between">
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >1st April 2023</a
                  >
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >3:15 PM</a
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
                     >Round 3 : Code Debugging </a
                  >
                  
               </div>
               <div class="mb-4 flex justify-between">
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >1st April 2023</a
                  >
                  <a
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >4:00 PM</a
                  >
               </div>
              </div>
            </div>
         </li>
         
         
         </ol>
      </div>
      
      <div className="faq">
            
      </div>
  </main>
</>
  )
}

export default Duocoding