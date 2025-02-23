import React from 'react'
import Sidebar from './Sidebar'
import Teamcards from './Teamcards'

const Team = () => {
    const team_names = ["Core Team", "Heads", "Outreach Team", "Marketing Team", "WebD Team"]

    const team = [
        {
            position:"Core Team",
            name:"Tanvi",
            

        }
    ]

    return (
        <>
            <h1 className="text-[5em] mb-0 text-white mt-[100px] uppercase ml-[150px] text-center"></h1>

            <Sidebar className='sidebar' title={"Teams"} list_names={team_names} />

            <div className=''>
                {
                    team_names.map((team_name, index) => (
                        <div id={team_name} key={index}>
                            <h1 className='text-[2em] font-[CustomFont] mb-[70px] text-red-400 mt-[70px] uppercase ml-[36] text-center'> {team_name}</h1>
                            <div className="flex justify-center items-center gap-[90px] flex-wrap mt-[50px]">
                                {
                                    team.filter(person => person.position === team_name).map((person, index) => (
                                        <Teamcards className='card' key={index} name={person.name} image={person.image} phoneNo={person.phoneNo} emailId={person.emailId} instagramId={person.instagramId} linkedinId={person.linkedinId} />
                                    ))

                                }
                            </div>
                        </div>

                    ))

                }
            </div>
        </>
    )
}

export default Team
