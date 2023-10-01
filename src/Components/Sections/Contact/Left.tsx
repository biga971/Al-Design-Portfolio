import React from 'react'
import { PhoneCall, Mail } from 'react-feather';

const Left = () => {

    return (
        <div className='flex h-full w-full flex-col items-center md:gap-16 '>
            <div className="flex flex-col items-start  h-full md:gap-16">
                <div className='flex flex-col items-start' >
                    <span className="text-neutral-700 text-3xl md:text-6xl font-semibold font-['Playfair Display'] md:leading-[56px]">
                        Plus d’infos ? 
                    </span>
                    <span className="text-white text-3xl md:text-6xl  font-semibold font-['Playfair Display'] md:leading-[56px]">
                        Contactez-moi
                    </span>
                </div>
                
           
            <div className=" h-[77px] text-justify text-neutral-700 text-xl md:text-[25px] font-normal font-['Inter'] ">
                Fais-moi part de tes demandes, <br/>
                je te recontacterai avec grand plaisir !
            </div>
            
            <div className="flex flex-col gap-2 md:gap-10">
                <div className="flex flex-row gap-4 items-center">
                    <div className='h-12 w-12  flex items-center justify-center bg-white rounded-full border-4 border-opacity-80' >
                    <PhoneCall color="black" size={30} />
                    </div>
                    <div className=" h-[50px] text-white text-[18px] md:text-[32px] font-medium font-['Playfair Display'] ">
                        0 696 23 71 72
                    </div>
                </div>

                <div className="flex flex-row gap-4 items-center mb-7">
                    <div className='h-12 w-12  flex items-center justify-center bg-white rounded-full border-4 border-opacity-80' >
                    <Mail color="black" size={30} />
                    </div>
                    <div className=" h-[50px] text-white text-[18px] md:text-[32px] font-medium font-['Playfair Display'] ">
                        contact.awc.design@gmail.com
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Left