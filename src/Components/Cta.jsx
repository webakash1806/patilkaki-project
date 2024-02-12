import React from 'react'

const Cta = () => {
    return (
        <div className='bg-sageGreen flex items-center justify-center p-10'>
            <div className='bg-grey sm:flex w-[90vw] lg:[80vw]'>
                <div className='border border-[#e0e0e0] text-white p-4  sm:w-[70%]'>
                    <h2 className='text-[1.3rem] font-semibold text-royalYellow'>Special Kaki Modak</h2>
                    <ul className='text-[0.95rem] list-disc ml-6'>
                        <li>Features 1</li>
                        <li>Features 2</li>
                        <li>Features 3</li>
                    </ul>
                </div>
                <div className='border border-[#e0e0e0] text-white p-4 sm:w-[30%]'>
                    <p>Price of Kaki Modak</p>
                    <p className='text-[2.2rem] font-semibold'>&#8377;249 <strike className='text-[1.3rem] font-normal'>499</strike></p>
                    <button className='font-semibold bg-royalYellow text-black p-1 px-6 rounded-sm'>Buy now!</button>
                </div>
            </div>
        </div>
    )
}

export default Cta
