import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col bg-royalYellow p-4 py-8 items-center rounded-lg'>

            <h1 className='text-[1.5rem] font-semibold'>Grab 50% discount!</h1>
            <p className='text-[0.95rem] pb-8'>Enter detail to grab a coupon code</p>
            <form className='flex flex-col gap-4 w-[16rem]'>
                <input className='p-2 rounded-sm outline-none' type="text" placeholder='Enter phone number...' />
                <input className='p-2 rounded-sm outline-none' type="email" placeholder='Enter email...' />
                <button className='bg-grey text-white p-2 rounded-sm'>Submit</button>
            </form>
        </div>
    )
}

export default Contact
