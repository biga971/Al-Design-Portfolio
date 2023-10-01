import React, { useState } from 'react'
import { Send } from 'react-feather';
import Input from '../../Input'
import './Contact.css'

const Right = () => {
    const [lastname, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className="w-full h-full flex items-center justify-center">
            <form className="w-[629px] h-[545px] bg-black bg-opacity-5 rounded-[21px] custom-shadows px-8 py-6 grid grid-cols-2 grid-rows-6 gap-4 relative " >
                <Input style="" placeholder='Nom*' onChangeText={setLastName}/>
                <Input style="" placeholder='Prénom*' onChangeText={setFirstName}/>
                <Input style="" placeholder='E-mail*' onChangeText={setMail}/>
                <Input style="" placeholder='Numéro de téléphone*' onChangeText={setPhone}/>
                <Input style="col-span-2" placeholder='Sujet*' onChangeText={setSubject}/>

                <div className="w-full h-full bg-white bg-opacity-90 rounded-[21px] custom-shadows col-span-2 row-span-3" >
                    <textarea 
                        className='h-full w-full rounded-[21px] px-2 py-3 outline-teal-600 resize-none'
                        placeholder='Message*'
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button 
                className=" absolute flex items-center justify-center w-[71px] h-[71px] shadow rounded-full custom-shadows-button bottom-8 right-9" 
                style={{background: '#4DB6AC'}}
                >
                    <Send className='relative right-1 top-1' color="white" size={44} />
                </button>
            </form>
        </div>
    )
}

export default Right