import React from 'react'
import Left from './Left'
import Right from './Right'

const Contact = () => {
    return (
        <section
        id='contact' 
        className="w-full h-full md:py-16 lgl:grid lgl:grid-cols-2 mt-28 xl:px-4 lgl:px-4 lg:flex lg:flex-col">
            <Left />
            <Right />
        </section>
    )
}

export default Contact