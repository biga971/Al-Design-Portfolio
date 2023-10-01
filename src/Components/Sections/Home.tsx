import React from 'react'
import logo from '../../assets/Images/logo.png'

const Home = () => {
    return (
        <section
          id='home' 
          className='flex flex-col items-center justify-center py-0 md:py-20 w-full '
        >
            <img className="w-[266px] h-[230px]" src={logo} />
            <div className="w-full h-[152.98px] text-center text-zinc-800 text-6xl md:text-8xl font-bold font-['Playfair Display'] leading-[115.20px]">
                AL.Design
            </div>
            <span className="w-full text-center text-teal-600 text-[24px] md:text-[32px] font-bold font-['Nunito'] uppercase  tracking-[8px] xxl:tracking-[16px] lgl:tracking-[9px]">
                La contribution qui fait la différence
            </span>
            <div className="w-full h-20 text-center text-black text-opacity-60 text-xl px-4 md:text-2xl font-normal font-['Nunito Sans'] mt-10 mb-2">
                Te voilà enfin !<br/>
                Je te laisse faire ton choix pour la suite de ta découverte.
            </div>
            
            <div className='flex flex-col items-center md:flex-row gap-2 pt-5'>
                <button className="w-[152.68px] h-[42.89px] px-[23.84px] py-2 bg-teal-600 rounded-lg justify-start items-start inline-flex cursor-pointer">
                    <span className="text-slate-50 text-lg font-medium font-['Roboto'] leading-[26.82px]">
                        Me découvrir
                    </span>
                </button>

                <button className="w-[236px] h-[43px] bg-white rounded-lg border border-black cursor-pointer" >
                <div className="w-[236px] text-center text-black text-lg font-medium font-['Roboto'] leading-[26.82px]">Découvrir mes réalisations</div>
                </button>
            </div>
            
        </section>
    )
}

export default Home