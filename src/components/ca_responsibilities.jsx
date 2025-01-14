import React from 'react'
import Image from 'next/image'
import styles from './resp.module.css'

import { User, Calendar, Megaphone, Users, Share, Brush } from "lucide-react";


const responsibilities = [
  {
    icon: <User className="w-12 h-12" />,
    title: "Be the Face of Fluxus at Your Institute",
    desc: "Act as a representative of Fluxus '25 at your institution, reflecting its spirit and values. Act as a bridge between E-Summit and your campus, building and maintaining a strong connection, acting as the main point of contact.",
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Lead and Execute Events",
    desc: "Organize and coordinate campus events related to Fluxus '25, ensuring smooth execution and engagement from participants within your institute.",
  },
  {
    icon: <Megaphone className="w-12 h-12" />,
    title: "Promote Fluxus '25",
    desc: "Envoke awareness about Fluxus '25, through various channels, both offline and online. Run marketing campaigns to boost attendance and interest among students.",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Engage with Students",
    desc: "Influence fellow students to encourage their participation and address any questions or concerns they may have about Fluxus '25. Foster a vibrant Entrepreneur community by building connections and networks among students.",
  },
  {
    icon: <Share className="w-12 h-12" />,
    title: "Oversee Social Media Engagement",
    desc: "Manage and boost Fluxus'25's social media presence across platforms such as Facebook, Instagram, and Twitter. Post updates, event information, and compelling content to draw in a broader audience.",
  },
  {
    icon: <Brush className="w-12 h-12" />,
    title: "Bring Creativity to the Forefront",
    desc: "CAs can also infuse their creativity through graphic design and video editing to develop promotional materials, campaign ideas, and other content to enhance the event's visibility and appeal.",
  },
];

const Ca_responsibilities = () => {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.content}>
                    <div className={styles.heading1}>{"YOUR"}</div>
                    <div className={styles.heading2}>{"RESPONSIBILITIES"}</div>

                    <ol className={styles.list}>
                        {responsibilities.map((resp, index) => (
                            <li>
                                <div className={styles.icon}>{resp.icon}</div>
                                <div className={styles.title}>{resp.title}</div>
                                <div className={styles.descr}>{resp.desc}</div>
                            </li>
                        ))}

                    </ol>

                </div>
            </div>
        </>
    )
}

export default Ca_responsibilities
