import React from 'react'
import Cards from '../components/HOME/Cards';
import Sidebar from '../components/HOME/Sidebar';

const CompletedTask = () => {
  return (

    <div className="flex  h-[98vh] gap-4">
    <div className="w-1/6 border border-gray-800 rounded-xl p-4 flex flex-col justify-between">
    <Sidebar />
  </div>
    <div>
      <Cards home={"false"}/>
    </div>
    </div>
  )
}

export default CompletedTask;