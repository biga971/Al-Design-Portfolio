import React from 'react'
import Left from './Left'
import Right from './Right'

const About = () => {
    return (
        <section
          id='about'
          className='flex lg:flex-row items-center justify-center w-full pt-32 gap-20 lg:gap-0 flex-col'
        >
            <Left />
            <Right />
        </section>
    )
}

export default About