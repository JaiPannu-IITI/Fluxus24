"use client"

import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'

import styles from '../app/styles/about.module.css'

const OPTIONS = {
    axis: 'y', 
    loop: true, 
}
const SLIDE_COUNT = 5
// const SLIDES = ["/static/images/Image1.jpg", "/static/images/Image2.jpg", "/static/images/Image3.jpg", "/static/images/Image4.jpg", "/static/images/Image5.jpg"]
const SLIDES = [
    "/static/images/carouselImages/img1.jpg",
    "/static/images/carouselImages/img2.jpg",
    "/static/images/carouselImages/img3.jpg",
    "/static/images/carouselImages/img4.jpg",
    "/static/images/carouselImages/img5.jpg",
    "/static/images/carouselImages/img6.jpg",
    "/static/images/carouselImages/img7.jpg",
    "/static/images/carouselImages/img8.jpg",
    "/static/images/carouselImages/img9.jpg",
    "/static/images/carouselImages/img10.jpg",
    "/static/images/carouselImages/img11.jpg",
    "/static/images/carouselImages/img12.jpg"
  ];

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
