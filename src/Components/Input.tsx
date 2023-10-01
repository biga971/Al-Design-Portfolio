import React , { ChangeEventHandler, Dispatch, SetStateAction } from 'react'
import './Sections/Contact/Contact.css'

const Input = (props: {
    style : string
    placeholder: string
    onChangeText: Dispatch<SetStateAction<string>>
}) => {
    const { style, placeholder, onChangeText } = props
    return (
        <div className= {`w-full h-[59px] bg-white bg-opacity-90 rounded-[21px] custom-shadows ${style}`} >
            <input 
               className='h-full w-full rounded-[21px] px-2 outline-teal-600'
               placeholder={placeholder} 
               onChange={(e) => onChangeText(e.target.value)}
            />
        </div>
    )
}

export default Input