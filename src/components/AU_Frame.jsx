"use client"

import React, { useState, useEffect } from 'react'
import EmblaCarousel from './EmblaCarousel'
import styles from '../app/styles/about.module.css'

const OPTIONS = {
    axis: 'y', 
    loop: true, 
}
const SLIDE_COUNT = 5
const SLIDES = ["/images/carouselImages/img1.JPG", "/images/carouselImages/img2.JPG", "/images/carouselImages/img3.JPG", "/images/carouselImages/img4.JPG", "/images/carouselImages/img5.JPG"]


const AU_Frame = () => {
    const [carouselOptions, setCarouselOptions] = useState({
        axis: 'y',
        loop: true,
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1108) {
                setCarouselOptions({loop: true });
            } else {
                setCarouselOptions({ axis: 'y', loop: true });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.frame}>
            <EmblaCarousel className="relative z-[-5]" slides={SLIDES} options={carouselOptions} />
        </div>
    );
}

export default AU_Frame;
