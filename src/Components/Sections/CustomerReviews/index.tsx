import React from 'react'
import Slider from './Slider';

const CustomerReviews = () => {
    
    const onClickLeft = () => {

    }
    const onClickRight = () => {

    }
    
    return (
        <section
          id='CustomerReviews'
          className='flex flex-col items-center justify-center w-full mt-16 pt-10 '
        >
            <div className="w-[333px] h-[72px] text-center text-teal-600 text-[64px] font-semibold font-['Playfair Display'] leading-[56px]">Avis clients</div>
          
             <Slider />
           
          {/*   <div className='flex flex-row mt-5 mb-10 gap-4'>
                <CircleButton logo={<ArrowLeft color="rgba(57, 152, 151, 1)" size={36} />} onClick={() => onClickLeft()}/>
                <CircleButton logo={<ArrowRight color="rgba(57, 152, 151, 1)" size={36} />}  onClick={() => onClickRight()}/>
            </div> */}
            
        </section>
    )
}

export default CustomerReviews