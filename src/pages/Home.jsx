import React from 'react'
import '../scss/style.scss';
import '../js/app';
import tfImg from '../assets/images/tf-bg.webp'
import tfMobileImg from '../assets/images/purple.webp'
import sait from '../assets/images/sait.svg'
import Event from '../components/Event';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Support from '../components/Support';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';




const Home = () => {
  return (
    <>
    <Navbar/>
      {/* <!-- Side Navbar --> */}
    <main>
      <button class="menu" id="nav-button">
        <img class="w-4" src={sait} alt="sait" />
      </button>
      <img class="fixed-bg" src={tfImg} alt="" />
      <img class="fixed-bg-mobile" src={tfMobileImg} alt="" />
    </main>

      <section id="home" class="container flex-container">
        <Hero/>
      </section>


      <section id="event">
        <h1 className=' text-center py-10 text-50 font-bold'>EVENTS</h1>
         <Event/>
      </section>

      <section className='mb-10' id="sponsors">
          {/* <h1 className="text-center py-10 text-50 font-bold">
            Sponsors
          </h1> */}
          {/* <Sponsors/> */}
      </section>
    <section className='mb-10' id="support">
      <h1 className=' text-center py-10 text-50 font-bold'>CONTACT US</h1>
    </section>
      <Support/>
      <Footer/>

    </>
  )
}

export default Home