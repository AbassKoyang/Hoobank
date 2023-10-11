import React from 'react';
import styles from './styles.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/hero.jsx';
import Stats from './components/Stats.jsx';
import Business from './components/Business.jsx';
const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar/>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={` bg-black ${styles.boxWidth}`}>
        <Hero/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={` bg-black ${styles.boxWidth}`}>
        <Stats/>
        </div>
      </div>
    </div>
  )
}

export default App