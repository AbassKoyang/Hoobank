import React from 'react'
import { arrowUp } from '../assets'
import styles from '../styles'

const Getstarted = () => {
  return (
    <div className={`${styles.flexCenter} hidden lg:flex w-[148px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-col`}>
                <p className=' flex font-poppins font-medium text-[18px] leading-[23.4px]'>
                    <span className='text-gradient'>Get</span>
                    <img src={arrowUp} alt="Arrow-up" className='w-[23px] h-[23px] object-contain' />
                </p>
                <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
                <span className='text-gradient'>Started</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Getstarted