import React from 'react'
import '../js/app'
import '../scss/style.scss';
import { BiHomeAlt2 } from 'react-icons/bi';
import {MdOutlineEventNote, MdOutlineGridGoldenratio,MdContactSupport} from 'react-icons/md'
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <>
      <nav>
        <div class="navigation">
          <ul>
            <li class="list" data-nav="home">
              <Link to="home" smooth={true} duration={500}>
                {<BiHomeAlt2 className='icon'/>}
              </Link>
            </li>
            <li class="list" data-nav="event">
              <Link to="event" smooth={true} duration={500}>
                {<MdOutlineEventNote className='icon'/>}
              </Link>
            </li>
            <li class="list" data-nav="sponsors">
              <Link to="sponsors" smooth={true} duration={500}>
                {<MdOutlineGridGoldenratio className='icon'/>}
              </Link>
            </li>
            <li class="list" data-nav="support">
              <Link to='support' smooth={true} duration={500}>
                {<MdContactSupport className='icon'/>}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar