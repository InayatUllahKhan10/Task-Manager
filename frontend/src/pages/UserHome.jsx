import React, { useState } from "react";
import { Outlet } from 'react-router-dom'
import Cards from "../components/HOME/Cards";
import InputData from "../components/HOME/InputData";

const UserHome = () => {

     // State to control the visibility of InputData component
  const [isVisible, setIsVisible] = useState(false);
    return (
        <>
        <div className="flex  h-[98vh] gap-4">
            <div className="w-full border border-gray-800 rounded-xl p-4 ">
                <Outlet />
            
            <Cards home={"false"}/>
            </div>
        </div>
        {isVisible && <InputData closeModal={() => setIsVisible(false)} />}
        </>
    );
}

export default UserHome;