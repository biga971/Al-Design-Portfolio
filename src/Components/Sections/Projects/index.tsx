import React from 'react'
import './Projects.css'
import Slider from './Slider'
const Projects = () => {
    return (
        <section
           id='projects'
           className="w-full h-full flex flex-col items-center mt-32"
        >
            <div className="w-[386px] h-[72px] text-center text-teal-600 text-[47px] md:text-[64px] font-semibold font-['Playfair Display'] leading-[56px] ">
                Mes projets
            </div>
           <Slider />
        </section>
    )
}

export default Projects