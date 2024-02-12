import React from 'react'
import Header from '../Components/Header/Header'
import heroImg1 from '../assets/heroImg1.jpg'
import heroImg2 from '../assets/heroImg2.jpg'
import heroImg3 from '../assets/heroImg3.jpg'
import About from './About'
import WhyWePage from './WhyWePage'

const Hero = () => {
    return (
        <>
            <Header />
            <div className='mt-[2rem]  py-[3rem] p-3 bg-grey min-h-[96vh] text-white flex flex-col md:flex-row items-center justify-around gap-10 sm:gap-4'>
                <div className='flex flex-col items-left justify-center gap-1 max-w-[25rem] sm:min-w-[32rem] md:min-w-[25rem] lg:min-w-[39rem]'>
                    <h1 className='text-[1.6rem] lg:text-[2.5rem] font-semibold text-royalYellow'>Welcome to Kaki Snacks <br /> <span>Elevate Your Snacking Experience!</span></h1>
                    <p className='text-[0.92rem] lg:text-[1rem]'>Discover a world of flavor with our handpicked selection of premium snacks. From savory to sweet, we've got your cravings covered. Elevate your snacking experience with Kaki Snacks.</p>
                    <button className='bg-royalYellow text-black px-14 rounded-[4px] font-semibold py-[7.5px] mt-3 w-fit'>Buy Now!</button>
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <img src={heroImg1} alt="" className='w-[10rem] h-[15rem] lg:w-[13rem] lg:h-[18rem] object-cover rounded-lg shadow-md hover:shadow-royalYellow' />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <img src={heroImg2} alt="" className='w-[10rem] lg:w-[13rem] rounded-xl shadow-md hover:shadow-royalYellow' />
                        <img src={heroImg3} alt="" className='w-[10rem] lg:w-[13rem] rounded-xl shadow-md hover:shadow-royalYellow' />
                    </div>
                </div>
            </div>
            <About />
            <WhyWePage />
        </>
    )
}

export default Hero
