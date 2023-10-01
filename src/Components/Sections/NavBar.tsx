import React from 'react'
import { Link } from "react-scroll";
import { navLinksdata } from '../../constants';

const Navbar = () => {
    return (
        <div className="w-full h-14 sticky top-0 z-50 bg-white mx-auto flex justify-around items-center font-titleFont ">
            <div className="text-zinc-800 text-lg font-bold font-['Comfortaa'] leading-loose">Alexandra LARCHER</div>
            <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
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
        </div>
    )
}

export default Navbar