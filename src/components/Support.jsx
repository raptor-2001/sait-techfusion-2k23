import React from 'react'
import {MdEmail, MdWhatsapp} from 'react-icons/md'


const Support = () => {
  return (
    <div class='contact-container'>
      <div class="container-item">
         {<MdEmail className='icon'/>}
        <div className="content-box">
           <h2 class='content-title'>Email</h2>
           <p className='content-description'>
              For any general inquiries related to our events, please do not hesitate to email us. We would be more than happy to assist you with any questions or concerns you may have.
           </p>
           <h2 className='content'>wce.sait@walchandsangli.ac.in</h2>
        </div>
      </div>
      <div class="container-item">
        
          {<MdWhatsapp className='icon'/>}
        
        <div className="content-box">
           <h2 class='content-title'>Whatsapp</h2>
           <p className='content-description'>
           Please feel free to reach out to us via WhatsApp, and we will make every effort to promptly respond to your message.
           </p>
           <h2 className='content'>Pratham Yadav: +91-7058492414</h2>
        </div>
      </div>
    </div>
  )
}

export default Support