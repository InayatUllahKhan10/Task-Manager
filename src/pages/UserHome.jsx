import React from "react";
import { Outlet } from 'react-router-dom'

const UserHome = () => {
    return (

        <div className="flex  h-[98vh] gap-4">
            <div className="w-5/6 border border-gray-800 rounded-xl p-4 ">
                <Outlet />
            </div>
        </div>


    );
}

export default UserHome;