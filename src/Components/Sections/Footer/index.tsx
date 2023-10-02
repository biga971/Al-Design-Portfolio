import React from 'react'
import Socials from './Socials'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 py-10 '>
            <div className="w-4/5  h-[0px] border-[1px] border-white " />
            <Socials />
        </div>
    )
}

export default Footer