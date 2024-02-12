import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import Hero from '../../Pages/Hero'
import About from '../../Pages/About'
import WhyWePage from '../../Pages/WhyWePage'
import Footer from '../Footer'
import CountdownComp from '../CountdownComp'
import Cta from '../Cta'
import Contact from '../Contact'

const Header = () => {

    const [barActive, setBarActive] = useState(true)
    const [active, setActive] = useState(false)

    const hamActive = () => {
        barActive ? setBarActive(false) : setBarActive(true)
    }

    const hero = useRef(null)
    const about = useRef(null)
    const whyWe = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setActive(true)
        }, 15000);

        return () => {
            clearTimeout(timeOut)
        }
    }, [])

    return (
        <div className='font-sans'>
            <header className='flex w-full justify-between  md:pl-14 md:pr-6 lg:pl-16 lg:pr-8 lg:p-3 bg-darkBg text-white items-center  z-[100] py-[10px] px-6 shadow-[-1px_1px_7px_#000] fixed top-0 left-0 bg-black'>
                <div className=' w-[2rem] h-[2rem] flex items-center justify-center md:hidden cursor-pointer text-royalYellow' onClick={hamActive}>
                    {barActive ? <FontAwesomeIcon icon={faBars} className='text-[1.3rem]' />
                        : <FontAwesomeIcon icon={faXmark} className='text-[1.6rem]' />}
                </div>
                <div className='md:mr-6 lg:mr-10'>Kaki Snacks</div>
                <nav className={`bg-black text-white md:border-0 shadow-[0px_160px_1000px_#12073ac5] md:shadow-none flex border-t-[#201154] border-t-2  p-4 pb-10 md:p-0 w-screen md:max-w-[80vw]  items-center justify-between gap-3 md:gap-0 flex-col absolute 
            ${barActive ? "top-[2.95rem] left-[-60rem] duration-[0.5s]" : "top-[2.85rem] left-0 duration-[0.5s]"}
             md:flex-row md:static `}>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-0 ">

                        <div onClick={() => scrollToSection(hero)} className='text-[1.05rem] 
                            tracking-wide 
                            w-[90vw] md:w-fit text-center md:border-0
                            md:hover:border-b-2
                            pb-4 pt-1 md:p-[3px_7px] md:m-[0px_6px]
                            lg:p-[3px_9px] lg:m-[0px_11px]
                             border-grey hover:border-royalYellow hover:text-royalYellow
                             duration-200 cursor-pointer 
                             border-b-[1px]'>
                            Home
                        </div >
                        <div onClick={() => scrollToSection(about)} className='text-[1.05rem] 
                            tracking-wide 
                            w-[90vw] md:w-fit text-center md:border-0
                            md:hover:border-b-2
                            pb-4 pt-1 md:p-[3px_7px] md:m-[0px_6px]
                            lg:p-[3px_9px] lg:m-[0px_11px]
                             border-grey hover:border-royalYellow hover:text-royalYellow
                             duration-200 cursor-pointer 
                             border-b-[1px]'>
                            About
                        </div >
                        <div onClick={() => scrollToSection(whyWe)} className='text-[1.05rem] 
                            tracking-wide 
                            w-[90vw] md:w-fit text-center md:border-0
                            md:hover:border-b-2
                            pb-4 pt-1 md:p-[3px_7px] md:m-[0px_6px]
                            lg:p-[3px_9px] lg:m-[0px_11px]
                             border-grey hover:border-royalYellow hover:text-royalYellow
                             duration-200 cursor-pointer 
                             border-b-[1px]'>
                            Why Kaki Snacks
                        </div >
                    </div>
                </nav>
            </header>
            <div ref={hero}>
                <Hero />
            </div>
            <div ref={about}>
                <About />
            </div>
            <div ref={whyWe} >
                <WhyWePage />
            </div>
            <CountdownComp />
            <Cta />
            <Footer />
            <div onClick={() => setActive(!active)} className='fixed bottom-2 left-2 z-100 text-royalYellow text-[2.2rem] p-2'>
                {!active && <FontAwesomeIcon icon={faCommentDots} />}
            </div>
            {active && <div className='fixed bottom-4 left-4' >
                <Contact /> <div onClick={() => setActive(false)} className='text-grey absolute top-[-3px] right-1 text-[1.2rem]'>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>}
        </div>
    )
}

export default Header