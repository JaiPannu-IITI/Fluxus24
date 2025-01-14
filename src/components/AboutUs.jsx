import React from 'react'

import styles from '../app/styles/about.module.css'
import Image from 'next/image'

import AU_Frame from './AU_Frame'

const AboutUs = () => {
  return (
    <>
        <div className={styles.AU}>
        <div className={styles.left_AU}>
          <nav className={styles.navabout}>
            {/* <Image src="/static/images/cam-removebg-preview 1.png" width={196} height={146} className={styles.projector} alt="" />
            <Image src="/static/images/Polygon 1.png" alt="" width={281} height={99} className={styles.polygon} /> */}
            <div className={styles.aboutTitle}>{"About Us"}</div>
          </nav>
          <div className={styles.contentContainer}>
            {"Fluxus 2024 is the annual techno-cultural fest of IIT Indore, a celebration of innovation, creativity, and collaboration that brings together students, enthusiasts, and industry leaders from across the country. This year, Fluxes aims to elevate experiences with a mix of thrilling competitions, insightful workshops, and dazzling cultural performances, creating a vibrant platform for knowledge exchange and skill-building. With events that bridge the gap between technology and art, Fluxes 2024 promises an unforgettable journey where passion meets purpose. Join us to push boundaries, ignite inspiration, and be part of a legacy that fosters growth and discovery."}
          </div>
        </div>
        <div className={styles.right_AU}>
          <AU_Frame />
        </div>
      </div>
    </>
  )
}

export default AboutUs