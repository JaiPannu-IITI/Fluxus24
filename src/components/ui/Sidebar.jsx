import React from 'react';

const Sidebar = ({ title , list_names }) => {
  return (
    <div className=" mt-[170px] fixed w-[300px] h-full p-[20px] text-white">
      <h3 className=" text-red-500 text-[2 rem] font-bold mb-[20px] transition-transform duration-300">{title}</h3>
      <ul className=" list-none p-0 ">
        {
            list_names.map((team , index) => (
                <li key={index} className="relative cursor-pointer text-white text-xl font-montserrat my-2 transition-transform duration-300 hover:text-red-400 hover:translate-x-2"> <a href={`#${team}`} className="no-underline text-inherit">{team} </a></li>
            ))
        }
      </ul>
    </div>
  );
}

export default Sidebar;