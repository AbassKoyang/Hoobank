
import React from 'react'
import styles from '../styles'
import { discount, robot } from '../assets'
import Getstarted from './Getstarted'

const Hero = () => {
  return (
    <section id='#home' className={`flex md:flex-row flex-col`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-0`}>
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="Discount" className='w-[32px] h-[32px]' />
                <p className={`${styles.paragraph} text-gray-400  ml-1 lg:ml-2 text-[14px]`}>
                    <span className="text-white">20%</span> Discount For
                    <span className="text-white"> 1 Month</span> Account
                </p>
            </div>

        <div className="flex flex-row item-center justify-between w-full">
          <h1 className='flex-1 font-poppins font-medium sm:text-[72px] text-[40px] text-white sm:leading-[100.8px] leading-[50px]'>
            The Next <br className='sm:block hidden' />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>

          <div className="md:flex hidden md:mr-4 mr-0 text-white">
           <Getstarted/>
          </div>
        </div>
        <h1 className=' font-poppins font-medium sm:text-[72px] text-[40px] text-white sm:leading-[100.8px] leading-[50px] '>
            Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] text-gray-600 mt-5 mb-7 lg:mb-0`}>
          Our class of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fee.
        </p>
        </div>
        <div className={`flex-1 ${styles.flexCenter} md:my-0 relative`}>
          <img src={robot} alt="Robot Image" />
                  {/* Gradient Start */}

        <div className="absolute z-[0] w-[40%] h-[38%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded=full  white__gradient bottom-40"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20  blue__gradient"/>
        </div>

        <div className={`md:hidden ${styles.flexCenter}`}>
          <Getstarted/>
        </div>
    </section>
  )
}

export default Hero