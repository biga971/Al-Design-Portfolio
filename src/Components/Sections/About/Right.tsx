import React from 'react'
import { ArrowRight } from 'react-feather';


const Right = () => {
    return (
        <div className='w-full px-4'>
            <div className="w-full text-left pb-3">
                <span className="text-neutral-700 text-2xl md:text-5xl font-semibold font-['Playfair Display'] md:leading-[56px]">
                    Je suis
                </span>
                <span className="text-teal-600 text-2xl md:text-5xl  font-semibold font-['Playfair Display'] md:leading-[56px] ml-2">
                    Alexandra LARCHER 
                </span> <br />
                <span className="text-zinc-800 text-2xl md:text-5xl  font-semibold font-['Playfair Display'] md:leading-[56px] ml-2">
                et je vais t’aider à développer
                </span><br />
                <span className="text-teal-600 text-2xl md:text-5xl  font-semibold font-['Playfair Display'] md:leading-[56px] ml-2">
                    l’image de ta marque
                </span>
            </div>

            <div className="w-full  text-justify ">
                <span className="text-black text-xl md:text-2xl font-normal font-['Inter'] ">
                    Passionée par la communication, je souhaite mettre mes compétences à ton service.<br/>
                </span>
                <span className="text-black text-base md:text-lg font-normal font-['Inter'] leading-normal"><br/>
                En quelques mots :<br/>
                GOUMEN : “Je suis une femme combative qui aime le challenge”<br/>
                TRAVAY : “Je ne renonce pas devant la difficulté, je persévère”<br/>
                PLÉZI : “Pouvoir faire ce que l’on aime est une chance”<br/>
                </span>
            </div>

            <div className="w-full  text-justify text-teal-600 text-xl md:text-2xl font-medium font-['Playfair Display'] mt-2">
               Tu souhaites me découvrir davantage ? Rencontrons-nous !
            </div>
            <div className='flex justify-center'>
                {/* <button className="w-[207px] bg-neutral-700 rounded-[80px] h-10 cursor-pointer flex justify-center items-center mt-3" >
                    <span className="text-white font-semibold font-['Inter']">Prendre Rendez-vous</span>
                    <ArrowRight color="white" size={24} />
                </button> */}
            </div>
            
        </div>
    )
}

export default Right