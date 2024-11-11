"use client"

import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'

import styles from '../styles/about.module.css'


const OPTIONS = {
    axis: 'y', 
    loop: true, 
}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const AU_Frame = () => {
    return (
        <>
            <div className={styles.frame}>
                {/* <img src="/static/images/frame.png" alt="" /> */}
                <EmblaCarousel className="relative z-[-5]" slides={SLIDES} options={OPTIONS} />

            </div>
        </>
    );
}

export default AU_Frame;
