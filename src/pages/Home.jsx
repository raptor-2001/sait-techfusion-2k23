import React from 'react'
import '../scss/style.scss';
import '../js/app';
import tfImg from '../assets/images/tf-bg.png'
import tfMobileImg from '../assets/images/red.jpg'
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
      <img class="fixed-bg-mobile" src="https://img.freepik.com/free-photo/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product_1258-52932.jpg?w=740&t=st=1678823744~exp=1678824344~hmac=89e2848b36cceb44159cac8a94b15c5abad5f96d255793f63756e024dd8dfa5b" alt="" />
    </main>

      <section id="home" class="container flex-container">
        <Hero/>
      </section>


      <section id="event">
        <h1 className=' text-center py-10 text-50 font-bold'>EVENTS</h1>
         <Event/>
      </section>

      <section className='mb-10' id="sponsors">
          <h1 className="text-center py-10 text-50 font-bold">
            Sponsors
          </h1>
          <Sponsors/>
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