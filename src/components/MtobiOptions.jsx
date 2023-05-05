import React from 'react'
import '../App.css';
import { BrowserRouter, Link } from 'react-router-dom';


export default function MtobiOptions({ arrayItems, selectOptions }) {
    return (
        <>

            <div className='App-header pt-16 md:pt-0'>
                <h1 className=' text-3xl font-bold text-white mytitle '>MTOBI AI HELPER</h1>

                <div className='mygrid grid grid-cols-1 md:grid-cols-2 px-7 gap-5 md:p-0'>

                    {arrayItems.map((item, index) => {
                        return <div key={index} className='grid-child' onClick={() => selectOptions(item.option)}>
                            <h4 className='font-bold'>{item.name}</h4>
                            <p className='text-sm'>{item.description}</p>
                        </div>
                    })}



                </div>

                <div className='mb-4'>
                    <Link to="/">
                        <button className='btnbtn mt-2 flex justify-start' >
                            GO TO HOME
                        </button>
                    </Link>
                </div>

            </div>



            <div className='flex justify-center items-center bg-gray-700 text-white py-4 px-4'>
                <p className='text-sm italiize'>Copyrights@2023, Mtobi Graphics, Frank Mwita, All RIghts Reserved</p>
            </div>

        </>
    )
}
