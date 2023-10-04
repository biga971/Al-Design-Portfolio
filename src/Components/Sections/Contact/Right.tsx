import React, { useEffect, useState } from 'react'
import { Send } from 'react-feather';
import Input from '../../Input'
import './Contact.css'
import { sendMail } from '../../../Mail';

const Right = () => {
    const [lastname, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [checked, setChecked] = useState(false);
    const [checkedNewsletter, setCheckedNewsletter] = useState(false);
    const [ readyToSend, setReadyToSend] = useState(false);
    const [bounce, setBounce] = useState('');

    useEffect (() => {
        const checking = check()
        if (checking) {
            setBounce('animate-bounce')
        }else {
            setBounce('')
        }
        setReadyToSend(checking)
    },[ lastname, firstName, mail, subject, message ])

    const check = () => {
        if (lastname !== '' && firstName !== '' && mail !== '' && subject !== '' && message !== '' )
        return true
        else
        return false
    }

    const onClick = () => {
        if(readyToSend){
           sendMail(lastname, firstName, mail, phone, subject, message) 
        }
        
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <form className="w-[629px] h-[599px] bg-black bg-opacity-5 rounded-[21px] custom-shadows px-8 py-6 grid grid-cols-2 grid-rows-8 gap-4  relative" >
                <Input style="" placeholder='Nom*' onChangeText={setLastName}/>
                <Input style="" placeholder='Prénom*' onChangeText={setFirstName}/>
                <Input style="" placeholder='E-mail*' onChangeText={setMail}/>
                <Input style="" placeholder='Numéro de téléphone*' onChangeText={setPhone}/>
                <Input style="col-span-2" placeholder='Sujet*' onChangeText={setSubject}/>

                <div className="w-full h-full bg-white bg-opacity-90 rounded-[21px] custom-shadows col-span-2 row-span-2    " >
                    <textarea 
                        className='h-full w-full rounded-[21px] px-2 py-3 outline-teal-600 resize-none'
                        placeholder='Message*'
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="w-full h-full text-neutral-700 text-sm font-medium font-['Inter'] leading-[17px] col-span-2 ">
                    En soumettant ce formulaire, j’accepte que mes informations soient utilisées exclusivement dans le cadre
                    de ma demande et de la relation commerciale éthique et personnalisée qui pourrait dérouler si je le 
                    souhaite.
                </div>
                <div className='h-full w-full flex flex-col col-span-2 row-span-2 '>
                     <div className="w-full h-full flex flex-row gap-2  ">
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            className="w-[23px] h-[22px] bg-white bg-opacity-80 rounded-[5px]"
                        />
                        <div className="w-full h-full  text-white text-sm font-medium font-['Inter']  flex justify-start">
                            Oui j’accepte*
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-row gap-2  ">
                        <input
                            type="checkbox"
                            checked={checkedNewsletter}
                            onChange={() => setCheckedNewsletter(!checkedNewsletter)}
                            className="w-[23px] h-[22px]  bg-white bg-opacity-80 rounded-[5px]"
                        />
                        <div className="w-full h-full  text-white text-sm font-medium font-['Inter'] flex justify-start">
                            J’accepte aussi de m’abonner à la newsletter
                        </div>
                    </div>
                </div>
               <button 
                type='button'
                className={`absolute  right-8 bottom-9 flex items-center justify-center w-[71px] h-[71px] shadow rounded-full custom-shadows-button ${bounce}`} 
                style={{background: '#4DB6AC'}}
                onClick={ () => onClick() }
                >
                    <Send className='relative right-1 top-1' color="white" size={44} />
                </button>
            </form> 
        </div>
    )
}

export default Right