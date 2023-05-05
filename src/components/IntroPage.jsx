import React from 'react'
import { Link } from 'react-router-dom';

export default function IntroPage() {
    return <>

        <div className='App-header md:pt-16 md:pt-0'>
            <p className='text-sm'>Welcome to</p>
            <h1 className=' text-3xl font-bold text-white mytitle mb-8'>MTOBI AI HELPER</h1>
            <div className='max-w-2xl mx-auto p-5 md:p-0 '>
                <p className='text-center text-sm'> An automated Question and Answer Ai system, designed by Frank Mwita(Mtobi Graphics) to assist you
                    in finding relevant information according to the questions. I would love to help you 😊😊</p>
                <div className='mt-4 flex gap-x-2 justify-center'>

                    <Link to="/home">
                        <button className='btnbtn mt-2' >
                            PROCEED
                        </button>
                    </Link>

                </div>
            </div>

        </div>


    </>
}
