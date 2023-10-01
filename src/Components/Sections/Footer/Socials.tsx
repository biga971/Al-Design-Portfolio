import React from 'react'
import { socials, Isocials } from '../../../constants'

const Socials = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5">
            {socials.map( (data, index) => (
                <button key={index} className="flex flex-row cusor-pointer" onClick={() => window.location.href = data.url}>
                    <img className="w-10 h-10 md:w-[45px] md:h-12" src={data.logo} />
                    <div className="md:w-[200px] h-12 text-white text-[24px] md:text-[32px] font-medium text-left ml-2">{data.name}</div> {/* font-['Inter'] */}
                </button>
            ))}
        </div>
    )
}

export default Socials