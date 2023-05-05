import React from 'react'
import '../App.css';


export default function AiLists({ setInput, giveFeedback }) {

    function refreshPage() {
        window.location.reload(false);
    }
    return (


        <div className='App-header2 flex-cols justify-center '>
            <button className='btn flex md:ml-10 mx-auto md:mb-4 mb-4' onClick={refreshPage}>GO BACK</button>

            <h1 className=' text-3xl font-bold text-white mytitle mb-4'>MTOBI AI HELPER</h1>

            <div className='max-w-2xl mx-auto p-5 md:p-0 '>
                <p className='text-justify'> I am an automated Ai Bot, designed by Frank Mwita(Mtobi Graphics) to assist you
                    in finding relevant information according to the questions. I would love to help you 😊😊😎</p>
                <textarea className="mt-4 mytextarea w-full h-32" placeholder='Ask me something..' onChange={(e) => setInput(e.target.value)}></textarea>
                <div className='mt-4 flex gap-x-2 justify-center'>
                    {/* <button className='btn' onClick={giveFeedback}>REQUEST ANSWER</button> */}
                    <button className='btn' onClick={() => alert("Soory the App in still under construction, it will be released soon, Thank you for choosing MtobiAi, your best personal Assistant 😎")}>REQUEST ANSWER</button>
                </div>
            </div>
        </div>
    )
}
