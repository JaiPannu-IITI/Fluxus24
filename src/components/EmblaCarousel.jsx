"use client"

import {React, useRef} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'

import styles from '../app/styles/about.module.css'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ speed: 8, startDelay:0})
  ])
console.log(slides);
  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              <Image width={1000} height={1000} className={styles.embla_img} src={index} alt={index+1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
