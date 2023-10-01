import React from 'react'
import img from '../../../assets/Images/AL.jpg'
import "./left.css"

const Left = () => {
    return (
        <div className=' flex px-16 justify-center '>
            <img className="h-[300px] w-[250px] md:w-[362px] md:h-[468px] rounded-[43px] shadowImg" src={img} />
            <span className='myImg' />
        </div>
    )
}

export default Left