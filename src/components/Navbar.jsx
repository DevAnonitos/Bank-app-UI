import React, { useState } from 'react';

import { close, logo, menu } from "../assets";

import { navLinks } from '../constants';

const Navbar = () => {
  // Logic hooks
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <>
      <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img 
          src={logo} 
          alt="hoobank" 
          className='w-[124px] h-[32px] cursor-pointe' 
        />

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) =>(
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] 
              ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white
              border-2 border-slate-400 px-4 py-1 rounded-lg ring-2 hover:brightness-200
              `}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* ======================Media query======================= */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu }
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle((prev) => !prev)}
          />  
          {/*======================== Subnav===================== */}
          <div
            className={`
            ${
              !toggle ? "hidden" : "flex"
            }   
              p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`
            }
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`
                    font-poppins font-medium cursor-pointer text-[16px] 
                    ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } ${ 
                      index === navLinks.length - 1 ? "mb-0" : "mb-4"
                    }`
                  }  
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>                       
        </div>
      </nav>
    </>
  )
}

export default Navbar