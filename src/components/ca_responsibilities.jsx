import React from 'react'
import Image from 'next/image'
import styles from './resp.module.css'

const Ca_responsibilities = () => {
    return (
        <>
        <div className={styles.section}>
            <div className={styles.content}>
                <div className={styles.heading1}>YOUR</div>
                <div className={styles.heading2}>RESPONSIBILITIES</div>

                   <ul className={styles.team}>
                    <li className={styles.member}>
                        <div className={styles.thumb}><Image src="/workshop/marketing.jpeg" width={"120"} height={"120"} /></div>
                        <div className={styles.description}>
                            <h3 className={styles.h3} >Chris Coyier</h3>
                            <p className=' text-lg text-black'>Chris is a front-end developer and designer. He writes a bunch of HTML, CSS, and JavaScript and shakes the pom-poms for CodePen.</p>
                        </div>
                    </li>
                    <li className={styles.member}>
                        <div className={styles.thumb}><Image width={"120"} height={"120"} src="/workshop/marketing.jpeg" /></div>
                        <div className={styles.description}>
                            <h3 className={styles.h3} >Alex Vazquez</h3>
                            <p className=' text-lg text-black'>Alex is a full stack developer. Alex does JavaScript development for CodePen, both front end and back, and just about everything else.</p>
                        </div>
                    </li>
                    <li className={styles.member}>
                        <div className={styles.thumb}><Image width={"120"} height={"120"} src="/workshop/marketing.jpeg" /></div>
                        <div className="description">
                            <h3 className={styles.h3} >Marie Mosley</h3>
                            <p className=' text-lg text-black'>Marie wears a lot of hats. She is our documentation lead, customer support maestra, editor, and community manager.</p>
                        </div>
                    </li>
                    <li className={styles.member}>
                        <div className={styles.thumb}><Image width={"120"} height={"120"} src="/workshop/marketing.jpeg" /></div>
                        <div className={styles.description}>
                            <h3 className={styles.h3} >Stephen Shaw</h3>
                            <p className=' text-lg text-black'>Stephen is a designer/developer residing in Houston. He likes to build animations with CSS & JavaScript.</p>
                        </div>
                    </li>
                    <li className={styles.member}>
                        <div className={styles.thumb}><Image width={"120"} height={"120"} src="/workshop/marketing.jpeg" /></div>
                        <div className={styles.description}>
                            <h3 className={styles.h3} >Rachel Smith</h3>
                            <p className=' text-lg text-black'>Rachel is a full stacker in Australia. Not only a creative and talented designer and developer, but a great technical writer.</p>
                        </div>
                    </li>
                    <li className={styles.member}>
                        <div className={styles.thumb}><Image width={"120"} height={"120"} src="/workshop/marketing.jpeg" /></div>
                        <div className={styles.description}>
                            <h3 className={styles.h3} >Robert Kieffer</h3>
                            <p className=' text-lg text-black'>Robert is a full-stack dev with a penchant for open-source work. He dwells in the murky depthsmurky depths of JS.</p>
                        </div>
                    </li>
                    
                </ul>

            </div>
            </div>
        </>
    )
}

export default Ca_responsibilities
