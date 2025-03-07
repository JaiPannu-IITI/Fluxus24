import React from "react";
import Sidebar from "./Sidebar";
import Teamcards from "./Teamcards";
import Image from "next/image";
import Snowfall from "react-snowfall";
import teamData from "@/app/team/teamData";
import { Pixelify_Sans } from "next/font/google";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"], // Specify the required subsets
  weight: ["400", "700"], // Specify required font weights
  display: "swap", // Use 'swap' for better font rendering
});

const Team = () => {
  const team_names = [
    "Core Team",
    "Heads",
    "WebD Team",
    "Outreach",
    "Marketing",
    "Creatives",
  ];

  return (
    <>
      <div
        className="bg-[#030410] flex flex-row"
        style={{
          backgroundImage: "url('/bg_team.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        {/* <h1 className={`${pixelifySans.className} text-[5em] mb-0 text-white mt-[120px] uppercase text-center`}></h1> */}

        <Sidebar className="sidebar" title={"Teams"} list_names={team_names} />

        <div className="sd:ml-[210px] mx-auto">
          {team_names.map((team_name, index) => (
            <div id={team_name} key={index}>
              <h1
                className={`${pixelifySans.className} text-[3em] font-[CustomFont] mb-[40px] text-white mt-[70px] uppercase text-center`}
              >
                {" "}
                {team_name}
              </h1>
              <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[60px] gap-x-[70px] px-10">
                {teamData
                  .filter((person) => person.team === team_name)
                  .sort((a, b) => {
                    if (a.priority === b.priority) {
                      return a.name.localeCompare(b.name);
                    }
                    return a.priority ? -1 : 1;
                  })
                  .map((person, index) => (
                    <div
                      key={index}
                      className="h-full w-full flex items-center justify-center"
                    >
                      <Teamcards
                        className="card"
                        name={person.name}
                        image={person.image}
                        phoneNo={person.phone}
                        emailId={person.email}
                        instagramId={person.instagram}
                        linkedinId={person.linkedin}
                        designation={person.designation}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
