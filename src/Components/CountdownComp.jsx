import React from 'react'
import Countdown from 'react-countdown'

const CountdownComp = () => {

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // return console.log("Completed");
        } else {
            return <span>{hours}H:{minutes}M:{seconds}S</span>;
        }
    };

    return (
        <div className='flex items-center justify-center p-10 bg-grey border-[4px] border-sageGreen'>
            <div className='text-[2.8rem] p-6  text-white bg-sageGreen tracking-widest font-semibold flex flex-col items-center w-[90vw] lg:[w-80vw]'>
                <h1 className='text-[1.5rem] tracking-normal text-[#e5f9fa]'>Time is running out.</h1>
                <h2 className='text-[1.3rem] tracking-normal text-[#ebfbfc]'>Grab 50% discount!</h2>
                <Countdown
                    date={Date.now() + 500000}
                    intervalDelay={1000}
                    renderer={renderer}
                />
                <button className='text-[1.1rem] bg-grey p-[5px] px-10 rounded-[3.5px] mt-4'>Buy Now!</button>

            </div>
        </div>
    )
}

export default CountdownComp
