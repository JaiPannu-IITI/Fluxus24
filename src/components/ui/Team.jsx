import React from 'react'
import Sidebar from './Sidebar'
import Teamcards from './Teamcards'
import Image from 'next/image'
import Snowfall from 'react-snowfall'
import teamData from '@/app/team/teamData'
import { Pixelify_Sans } from 'next/font/google';

const pixelifySans = Pixelify_Sans({
    subsets: ['latin'], // Specify the required subsets
    weight: ['400', '700'], // Specify required font weights
    display: 'swap', // Use 'swap' for better font rendering
});

const Team = () => {
    const team_names = ["Core Team", "Heads", "WebD Team", "Outreach", "Marketing", "Creatives"]

    return (
        <>
            <div className='bg-[#030410]' style={{
                backgroundImage: "url('/images/texture.svg')",
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
                backgroundAttachment: "fixed",
                position: "relative",
                top: "-100px"
            }}>
                <h1 className={`${pixelifySans.className} text-[5em] mb-0 text-white mt-[100px] uppercase ml-[150px] text-center`}></h1>

                <Sidebar className='sidebar' title={"Teams"} list_names={team_names} />

                <div className=''>
                    {
                        team_names.map((team_name, index) => (
                            <div id={team_name} key={index}>
                                <h1 className={`${pixelifySans.className} text-[2em] font-[CustomFont] mb-[70px] text-white mt-[70px] uppercase ml-[36] text-center`}> {team_name}</h1>
                                <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] mt-[50px] px-10 pl-[250px]">
                                    {
                                        teamData.filter(person => person.team === team_name).map((person, index) => (
                                            <Teamcards className='card' key={index} name={person.name} image={person.image} phoneNo={person.phone} emailId={person.email} instagramId={person.instagram} linkedinId={person.linkedin} designation={person.designation} />
                                        ))

                                    }
                                </div>
                            </div>

                        ))

                    }
                </div>
            </div>
        </>
    )
}

export default Team
