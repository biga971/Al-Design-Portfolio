import React from 'react'
import { socials, Isocials } from '../../../constants'
import { socials as db } from '../../../constants/socials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaXTwitter, FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";

const Socials = () => {
  

    return (
        <div className="flex flex-row gap-5">
            {/* {socials.map( (data, index) => (
                <button key={index} className="flex flex-row cusor-pointer" onClick={() => window.location.href = data.url}>
                    <img className="w-10 h-10 md:w-[45px] md:h-12" src={data.logo} />
                    
                    <div className="md:w-[200px] h-12 text-white text-[24px] md:text-[32px] font-medium text-left ml-2">{data.name}</div> 
                </button>
            ))} */}

            {db.map( (data, index) => (
                <button key={index} className="flex flex-row cusor-pointer" onClick={() => window.location.href = data.url}>
                    {data.logo}
                </button>
            ))}
        </div>
    )
}

export default Socials