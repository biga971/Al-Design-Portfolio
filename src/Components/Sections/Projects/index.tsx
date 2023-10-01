import React from 'react'
import logo from '../../../assets/Images/projects/image1.png'
import './Projects.css'
import { projectsPictures } from '../../../constants'
import Slider from './Slider'
const Projects = () => {
    return (
        <section
           id='projects'
           className="w-full h-full flex flex-col items-center mt-32"
        >
            <div className="w-[386px] h-[72px] text-centerv text-teal-600 text-[64px] font-semibold font-['Playfair Display'] leading-[56px] ">
                Mes projets
            </div>
           {/*  <Carousel /> */}
           <Slider />

          {/*   <div className="w-full h-[400px] flex overflow-hidden" >
                {projectsPictures.map((data,index) => {
                    if(index <5 )
                   return <img key={index} className="color" src={data.url} alt=''/>
                })}
                <img className="color" src={logo} alt=''/>
                <img className="color" src={logo} alt=''/>
                <img className="color" src={logo} alt=''/>
                <img className="color" src={logo} alt=''/>
                <img className="color" src={logo} alt=''/>
            </div> */}
        </section>
    )
}

export default Projects