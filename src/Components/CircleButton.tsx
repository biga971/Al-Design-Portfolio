import React from 'react'
import Circle from '../assets/Images/circle.png'
import { FontAwesome } from '@expo/vector-icons';

const CircleButton = (props :{
    logo: any
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
}) => {
   
     /*  <div style={{ 
            backgroundImage: `url(${Circle})`,
            height: "99px",
            width: "83px"
            }}>
            
        </div> */

    const {logo, onClick} = props

    return (
      <button 
      className='h-16 w-16  flex items-center justify-center bg-white rounded-full border-4 border-amber-400 border-opacity-80'
      onClick={onClick}
      >
        {logo}
      </button>
    )
}

export default CircleButton