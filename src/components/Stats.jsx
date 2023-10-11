import React from 'react'
import styles from '../styles'
import { stats } from '../assets/constants'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-col lg:flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map(stats => (
            <div key={stats.id} className={`flex-1 flex justify-center items-center flex-row m-3`}>
                <h4 className='font-poppins font-semibold sm:text-[40.89] text-[30.89px] text-white'>
                    {stats.Value}
                </h4>
                <p className="text-gradient font-normal font-poppins text-[20.45px] leading-[26.58px] uppercase ml-3">
                    {stats.title}
                </p>
            </div>
        ))
        }
    </section>
    )
}

export default Stats