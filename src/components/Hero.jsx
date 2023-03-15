import React from 'react'
import '../scss/style.scss';
import '../js/app';


const Hero = () => {
  return (
    <>
        {/* <!-- Hero Section --> */}
        <div class="hero-section text-center">
          <h2 class="hero-title">TECHFUSION'23</h2>
          <p class="hero-p">Students' Association of Information Technology WCE, Sangli</p>
          <p className="hero-description">
              Techfusion is the flagship event organized by SAIT on an annual basis, which comprises a diverse range of technical and non-technical events designed to provide participants with an immersive and rewarding experience. The events have been meticulously structured to ensure that participants derive maximum value from them, while also enjoying themselves to the fullest extent possible.
          </p>

        </div>
        {/* <!-- Countdown --> */}
        <div class="container countdown">
          <div class="container-segment">
            <div class="segment-title">Days</div>
            <div class="segment">
              <div class="flip-card" data-days-tens>
                <div class="top">0</div>
                <div class="bottom">0</div>
              </div>
              <div class="flip-card" data-days-ones>
                <div class="top">0</div>
                <div class="bottom">0</div>
              </div>
            </div>
          </div>
          <div class="container-segment">
            <div class="segment-title">Hours</div>
            <div class="segment">
              <div class="flip-card" data-hours-tens>
                <div class="top">0</div>
                <div class="bottom">0</div>
              </div>
              <div class="flip-card" data-hours-ones>
                <div class="top">0</div>
                <div class="bottom">0</div>
              </div>
            </div>
          </div>
          <div class="container-segment">
            <div class="segment-title">Minutes</div>
            <div class="segment">
              <div class="flip-card" data-minutes-tens>
                <div class="top">0</div>
                <div class="bottom">0</div>
              </div>
              <div class="flip-card" data-minutes-ones>
                <div class="top">0</div>
                <div class="bottom">0</div>
              </div>
            </div>
          </div>
          <div class="container-segment last">
            <div class="segment-title">Seconds</div>
            <div class="segment">
              <div class="flip-card" data-seconds-tens>
                <div class="top">0</div>
                <div class="bottom">0</div>
              </div>
              <div class="flip-card" data-seconds-ones>
                <div class="top">0</div>
                <div class="bottom">0</div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero