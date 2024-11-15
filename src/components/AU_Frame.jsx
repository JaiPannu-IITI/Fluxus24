"use client"

import React, { useState, useEffect } from 'react'
import EmblaCarousel from './EmblaCarousel'
import styles from '../app/styles/about.module.css'

const OPTIONS = {
    axis: 'y', 
    loop: true, 
}
const SLIDE_COUNT = 5
// const SLIDES = ["/static/images/Image1.jpg", "/static/images/Image2.jpg", "/static/images/Image3.jpg", "/static/images/Image4.jpg", "/static/images/Image5.jpg"]
const SLIDES = [
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img1-9Yt8vuZIrLUC07mDlY66XyTdLB0THj.jpg",
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img2-XSj4kgYU21wRtkCPMtYgBOuysCBv2a.jpg",
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img3-mzliEmie5GJLvbfzuPMZe4v9mePaXk.jpg",
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img4-UELywVxWGJtPl96npp7WGDVY41HpVZ.jpg",
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img5-XTElf8tCwtBb29MRFwn9spvi2ljD2F.jpg",
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img6-LdG9jWphV14al5RtzQjHK8QXm3UxGd.jpg",
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img7-1Ph8mW9LArSHLFFdTDmMLdKlLZI34M.jpg",
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img8-nSwu7qYbbKcMil89L0y6sfQQlVZwDC.jpg",
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img9-RHGqJ7W6ixq8UNggewBehIRuttLyyl.jpg",
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img10-NHYA7LGBLCRJ1xqKXfPMHVcA5mNGY4.jpg",
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img11-Ee5CS0UF9v1KUNcLfZUCUb8ehYzJMW.jpg",
    "https://vhk1meghamdhsbee.public.blob.vercel-storage.com/carouselImages/img12-pvMREnp4RZ5F4FqNjaTjPqkfWjta2Y.jpg"
  ];

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
