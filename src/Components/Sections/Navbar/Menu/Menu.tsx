import React, { Dispatch, SetStateAction } from 'react'
import { Link } from "react-scroll";
import { MdClose } from "react-icons/md";
import { socialsNav as db } from '../../../../constants/socials'
import logo from '../../../../assets/Images/logo.png'
import { navLinksdata } from '../../../../constants';

const Menu = (props: {
    setShowMenu: Dispatch<SetStateAction<boolean>> 
}) => {
    const { setShowMenu } = props
    return (
        <div className="w-[80%] h-screen overflow-scroll absolute top-0 right-0 bg-white p-4 scrollbar-hide">
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
          </div> 
    )
}

export default Menu