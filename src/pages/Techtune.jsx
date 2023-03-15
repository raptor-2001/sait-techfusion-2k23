import React from 'react'
import '../scss/event.scss'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { Link } from 'react-router-dom'


const Techtune = () => {
  return (
<>
   <div class="login-box">
      <form>  
         <a href="#">
         <span></span>
         <span></span>
         Register
         <span></span><span></span>
         </a>
      </form>
   </div>
   <main className='event-box'>
      <Link to="/">
         <IoMdArrowRoundBack/>
      </Link>
   
      <div className="event-header">
         <h2 className='event-title'>Techtune</h2>
      </div>
      <div className="event-detail">
         <div className="event-rules">
            <h5 className='text-rule text-left p-6'>Rules</h5>
            <ul className="rule-ul">
               <li className="rule-li">
                  Rule #1
               </li>
               <li className="rule-li">
                  Rule #1
               </li>
               <li className="rule-li">
                  Rule #1
               </li>
               <li className="rule-li">
                  Rule #1
               </li>
               <li className="rule-li">
                  Rule #1
               </li>
            </ul>
         </div>
         <div className="event-prizes">
          <img src="https://img.freepik.com/free-vector/trophy_78370-345.jpg?w=900&t=st=1678788189~exp=1678788789~hmac=49ad88e4dd3280ad805c8f2116dc48babf5260c895a6119b5581fdbf3a4040a9" alt="" />
          <h3 className="prize-amount text-center">upto $100</h3>
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
                     href="#!"
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >Inaugration</a
                  >
                  <a
                     href="#!"
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >04 / 02 / 2022</a
                  >
               </div>
               <p class="mb-6 text-neutral-700 dark:text-neutral-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  scelerisque diam non nisi semper, et elementum lorem ornare.
                  Maecenas placerat facilisis mollis. Duis sagittis ligula in
                  sodales vehicula.
               </p>
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
                     href="#!"
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >Round 1</a
                  >
                  <a
                     href="#!"
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >12 / 01 / 2022</a
                  >
               </div>
               <p class="mb-6 text-neutral-700 dark:text-neutral-200">
                  Libero expedita explicabo eius fugiat quia aspernatur autem
                  laudantium error architecto recusandae natus sapiente sit nam
                  eaque, consectetur porro molestiae ipsam an deleniti.
               </p>
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
                     href="#!"
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >
                  Round 2
                  </a>
                  <a
                     href="#!"
                     class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                     >21 / 12 / 2021</a
                  >
               </div>
               <p class="mb-6 text-neutral-700 dark:text-neutral-200">
                  Voluptatibus temporibus esse illum eum aspernatur, fugiat
                  suscipit natus! Eum corporis illum nihil officiis tempore.
                  Excepturi illo natus libero sit doloremque, laborum molestias
                  rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
               </p>
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

export default Techtune