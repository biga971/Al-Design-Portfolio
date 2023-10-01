import React from 'react'
import Socials from './Socials'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 pb-10'>
            <div className="w-4/5  h-[0px] border-2 border-white " />
            <Socials />
        </div>
    )
}

export default Footer