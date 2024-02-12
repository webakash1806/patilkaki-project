import React, { useRef } from 'react'
import Founder from '../assets/Founder.png'

const About = () => {
    const about = useRef(null)
    // const whyWe = useRef(null)
    return (
        <div ref={about} className='bg-grey text-white flex flex-col items-center justify-center gap-4 py-20'>
            <h1 className='text-[1.4rem] font-semibold border-b-2 pb-[1px] border-royalYellow'>About the Founder</h1>
            <div className='flex flex-col items-center justify-center gap-6 lg:flex-row'>
                <div>
                    <img src={Founder} alt="" className='w-[17rem] rounded-md lg:w-[22rem]' />
                </div>
                <div className='w-[90vw] sm:w-[75vw] md:w-[45vw]'>
                    <div className='border-l pl-6 relative ml-6'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[0.38rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Meet Founder - The Creative Force Behind Kaki Snacks</h2>
                        <p className='text-[0.95rem] pt-2'>Founder's, a passionate food enthusiast, embarked on a journey to redefine snacking. With a vision to create snacks that bridge the gap between indulgence and nutrition,Founder's founded Kaki Snacks.</p>
                    </div>
                    <div className='border-l pl-6 relative ml-6 pt-10'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[2.9rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Inspiration for Kaki Snacks</h2>
                        <p className='text-[0.95rem] pt-2'>Driven by a love for wholesome ingredients and a desire to provide healthier snack alternatives, Founder's channels creativity and culinary expertise into every Kaki Snacks creation.</p>
                    </div>
                    <div className='border-l pl-6 relative ml-6 pt-10'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[2.9rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Our Commitment</h2>
                        <p className='text-[0.95rem] pt-2'>Founder's, and the entire Kaki Snacks team are committed to delivering snacks that not only satisfy your cravings but also contribute to your well-being. Join us on this flavorful journey, and let's snack with a purpose!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
