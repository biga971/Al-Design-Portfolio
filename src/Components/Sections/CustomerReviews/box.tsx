import React from 'react'
import stars from '../../../assets/Images/rate.png'
import { IcustommersRiviews } from '../../../constants'

const Box = (props: {
    data: IcustommersRiviews
} ) => {
    const { data } = props;
    const rate = []
   
    for (let i = 0; i < data.rate; i++) {
        rate.push('')
    }
    
    return (
        <div className="flex flex-col justify-center items-center w-[300px] md:w-[530px] h-[231px]  bg-zinc-100 bg-opacity-40 rounded-[39px] mx-5 px-5">
            <div className="flex flex-row justify-center items-center mb-3" >
                {rate.map ( (rate,index) => (
                    <img key={index} src={stars} alt='rate' className='w-[30px] h-[30px] md:w-[54px] md:h-[57px]'/>
                ))}
                {/* <div className="w-[30px] h-[30px] md:w-[88px] md:h-[62px] text-center text-neutral-700 text-xl md:text-4xl font-semibold font-['Playfair Display'] leading-[56px] flex justify-center items-center mt-1">
                    {data.rate}
                </div> */}
            </div>
            
            <div className="w-fullL md:h-[77px] text-center text-neutral-700 text-base md:text-xl font-normal font-['Inter'] leading-[25px]">
                {data.description}
            </div>
            <div className="flex  justify-center w-60 h-[42px] text-center text-teal-600 text-xl md:text-2xl font-semibold font-['Playfair Display'] leading-[56px] mt-3">
                {data.name}
            </div>
        </div>
    )
}

export default Box