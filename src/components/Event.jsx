import React from 'react'
// import eventCard from '../js/data'
// import EventCard from './EventCard'
import { Link } from 'react-router-dom'
import podium from '../assets/images/podium.webp'
import techtune from '../assets/images/techtune.webp'
import paircoding from '../assets/images/paircoding.webp'
import cricket from '../assets/images/cricket.webp'
import codecrush from '../assets/images/codecrush.webp'
import cloudcomputing from '../assets/images/cloudcomputing.webp'

const Event = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* {eventCard.map(event => (
        <EventCard key={event.id} img={event.image} title={event.title} description={event.description} link={event.link}/>
      ))} */}
      <div class=" m-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to='/event/podium'>
              <img class="rounded-t-lg" src={podium} alt="" />
          </Link>
          <div class="p-5">
              <Link to='/event/podium'>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Podium</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Podium is an event that takes your soft skills to the next level through challenging activities, improving communication, teamwork, leadership, and more. It's not just a competition but a unique learning opportunity to improve interpersonal abilities.
              </p>
              <Link to='/event/podium' class="inline-flex items-center px-2 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
          </div>
      </div>
      <div class=" m-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to='/event/techtune'>
              <img class="rounded-t-lg" src={techtune} alt="" />
          </Link>
          <div class="p-5">
              <Link to='/event/techtune'>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TechTune</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Techtune is an immersive hardware workshop that provides hands-on experience with different computer components through live demonstrations. Additionally, the workshop includes a cybersecurity awareness session to educate participants on the importance of protecting their hardware and data from cyber threats.
              </p>
              <Link to='/event/techtune' class="inline-flex items-center px-2 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
          </div>
      </div>
      <div class=" m-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to='/event/codeduet'>
              <img class="rounded-t-lg" src={paircoding} alt="" />
          </Link>
          <div class="p-5">
              <Link to='/event/codeduet'>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CodeDuet</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              CodeDuet is a pair coding contest with challenging rounds that test teamwork and coding skills. Participants solve complex problems together under time pressure, improving collaboration abilities.
              </p>
              <Link to='/event/codeduet' class="inline-flex items-center px-2 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
          </div>
      </div>
      <div class=" m-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to='/event/b2b'>
              <img class="rounded-t-lg" src={cricket} alt="" />
          </Link>
          <div class="p-5">
              <Link to='/event/b2b'>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bid 2 Build</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Bid 2 Build is an IPL-style auction event where cricket skills and attentiveness are judged as participants bid for players to build their team. It requires strategic decision-making and cricket knowledge to build a winning team, making it an exciting opportunity to showcase skills and test decision-making abilities.
              </p>
              <Link to='/event/b2b' class="inline-flex items-center px-2 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
          </div>
      </div>
      <div class=" m-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to='/event/codecrush'>
              <img class="rounded-t-lg" src={codecrush} alt="" />
          </Link>
          <div class="p-5">
              <Link to='/event/codecrush'>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CodeCrush</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Codecrush is an online coding contest for individual participants, featuring two tracks: Novice (open to only FY students) and Expert (open to SY, TY, and Final Year students). The contest includes a range of questions varying in difficulty from easy to hard. Codecrush is an excellent opportunity for students to showcase their coding abilities and compete with their peers, pushing their limits and improving their skills.
              </p>
              <Link to='/event/codecrush' class="inline-flex items-center px-2 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
          </div>
      </div>
      <div class=" m-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to='/event/cloudverse'>
              <img class="rounded-t-lg" src={cloudcomputing} alt="" />
          </Link>
          <div class="p-5">
              <Link to='/event/cloudverse'>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CloudVerse</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Cloudverse is a one-day event covering AWS services to provide a comprehensive understanding of cloud computing basics and elements. Participants gain valuable insights and practical skills for real-world scenarios, making it an engaging and informative learning experience.
              </p>
              <Link to='/event/cloudverse' class="inline-flex items-center px-2 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
          </div>
      </div>
      
    </div>
  )
}

export default Event 