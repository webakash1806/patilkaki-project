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
        <div className=' text-white bg-sageGreen flex flex-col items-center justify-center p-6'>
            Countdown
            <div className='text-[2.8rem] tracking-widest font-semibold flex flex-col items-center'>
                <Countdown
                    date={Date.now() + 500000}
                    intervalDelay={1000}
                    renderer={renderer}
                />
                <button className='text-[1.1rem] bg-grey p-[5px] px-10 rounded-[3.5px]'>Grab 50% off!</button>
            </div>

        </div>
    )
}

export default CountdownComp
