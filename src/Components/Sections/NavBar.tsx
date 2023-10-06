import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { socialsNav as db } from '../../constants/socials'
import logo from '../../assets/Images/logo.png'
import { navLinksdata } from '../../constants';
import { NavMenu } from './Navbar/NavMenu'
import Toggle from './Navbar/Menu/Toggle';
import Menu from './Navbar/Menu/Menu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="w-full h-14 sticky top-0 z-50 bg-white mx-auto flex justify-between items-center font-titleFont px-10">
          <div className=" flex flex-row gap-3">
            <div className="flex-row hidden mdxl:inline-flex gap-3">
              {db.map( (data, index) => (
                <button key={index} className="flex flex-row cusor-pointer" onClick={() => window.location.href = data.url}>
                    {data.logo}
                </button>
              ))}
            </div>
             <span className="text-zinc-800 text-lg font-bold font-['Comfortaa'] leading-loose">
              Alexandra LARCHER
            </span>
          </div>
           
            <ul className="hidden mdxl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-teal-600  duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* <NavMenu /> */}
        <Toggle setShowMenu={setShowMenu} showMenu={showMenu} />
        {/* <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdxl:hidden bg-teal-600 w-10 h-10 inline-flex items-center justify-center rounded-full text-white cursor-pointer"
        >
          <FiMenu />
        </span> */}
        {showMenu && (
          <>
          <Menu setShowMenu={setShowMenu} />
          {/* <div className="w-[80%] h-screen overflow-scroll absolute top-0 right-0 bg-white p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className='flex justify-center'>
                <img className="w-32" src={logo} alt="logo" />
                
              </div>
              <ul className="flex flex-col items-center gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-teal-600 duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col w-full gap-4">
                <h2 className="text-base uppercase flex justify-center font-titleFont mb-4">
                  Me Trouver
                </h2>
                <div className="flex justify-center w-full gap-4">
                {db.map( (data, index) => (
                  <button key={index} className="flex flex-row cusor-pointer" onClick={() => window.location.href = data.url}>
                      {data.logo}
                  </button>
                ))}
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>  */}
          </>
        )}
        </div>
    )
}

export default Navbar