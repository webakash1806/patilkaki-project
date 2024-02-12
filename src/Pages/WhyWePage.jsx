import React from 'react'
import whyImg from '../assets/whyImg.png'

const WhyWePage = () => {
    return (
        <div className='bg-grey text-white flex flex-col items-center justify-center gap-4 py-20'>
            <h1 className='text-[1.4rem] font-semibold border-b-2 pb-[1px] border-royalYellow'>Why Choose Us?</h1>
            <div className='flex flex-col items-center justify-center gap-6 lg:flex-row'>
                <div>
                    <img src={whyImg} alt="" className='w-[17rem] lg:w-[22rem] rounded-md' />
                </div>
                <div className='w-[90vw] sm:w-[75vw] md:w-[45vw]'>
                    <div className='border-l pl-6 relative ml-6'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[0.38rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Craftsmanship</h2>
                        <p className='text-[0.95rem] pt-2'>At Kaki Snacks, we believe in the artistry of snacking. Our snacks are meticulously crafted, ensuring a symphony of flavors in every bite. From the sourcing of ingredients to the final packaging, we prioritize quality at every step.</p>
                    </div>
                    <div className='border-l pl-6 relative ml-6 pt-10'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[2.9rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Expertise</h2>
                        <p className='text-[0.95rem] pt-2'>With years of culinary expertise, Kaki Snacks is a testament to the dedication of our team. Our chefs, led by Founder's, bring a wealth of experience to the kitchen, ensuring each snack is a masterpiece.</p>
                    </div>
                    <div className='border-l pl-6 relative ml-6 pt-10'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[2.9rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Natural Goodness</h2>
                        <p className='text-[0.95rem] pt-2'>Experience the joy of snacking without guilt. We use natural ingredients, free from artificial preservatives and additives. Kaki Snacks is a celebration of the goodness nature provides.</p>
                    </div>
                    <div className='border-l pl-6 relative ml-6 pt-10'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[2.9rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Global Flavors, Local Touch

                        </h2>
                        <p className='text-[0.95rem] pt-2'>Dive into a world of global flavors with a local touch. We draw inspiration from diverse culinary traditions to bring you snacks that transcend borders and delight taste buds worldwide.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhyWePage
