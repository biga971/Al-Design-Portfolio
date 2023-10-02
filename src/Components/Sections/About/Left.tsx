import React from 'react'
import img from '../../../assets/Images/AL.jpg'
import "./left.css"

const Left = () => {
    /* mdl:w-[670px] mdl:h-[470px] */
    return (
        <div className=' flex px-16 justify-center w-full'>
            <img className="h-[350px] w-[250px] md:w-[362px] md:h-[490px]  rounded-[43px] shadowImg bg-cover bg-center" src={img} />
            <span className='myImg' />
        </div>
    )
}

export default Left