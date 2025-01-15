import React from 'react'

import styles from '../app/styles/about.module.css'
import Image from 'next/image'
import bglight from "../../public/images/bg/bglight.png"
import AU_Frame from './AU_Frame'

const Aboutus = () => {
  return (
    <>
        <div id='AU' className={styles.AU}>
          {/* <Image
                  src={bglight || "/placeholder.svg"}
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="z-0 AUbg"
                /> */}
        <div className={styles.left_AU}>
          <nav className={styles.navabout}>
            <span className={styles.aboutTitle}>{"About"}</span>
            <span className={styles.aboutTitle2}>{"FLUXUS"}</span>
          </nav>
          <div className={styles.contentContainer}>
            {"Fluxus is the annual techno-cultural fest of IIT Indore, a celebration of innovation, creativity, and collaboration that brings together students, enthusiasts, and industry leaders from across the country. This year, fluxus aims to elevate experiences with a mix of thrilling competitions, insightful workshops, and dazzling cultural performances, creating a vibrant platform for knowledge exchange and skill-building. With events that bridge the gap between technology and art, fluxus 2025 promises an unforgettable journey where passion meets purpose. Join us to push boundaries, ignite inspiration, and be part of a legacy that fosters growth and discovery."}
          </div>
        </div>
        <div className={styles.right_AU}>
          <AU_Frame />
        </div>
      </div>
    </>
  )
}

export default Aboutus