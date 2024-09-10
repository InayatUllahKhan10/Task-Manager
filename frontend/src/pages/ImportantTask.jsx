// import React from "react";
// import Cards from "../components/HOME/Cards";
// import Sidebar from "../components/HOME/Sidebar";

// const ImportantTask = () => {
//   return (
//     <div className="flex  h-[98vh] gap-4">
//       <div className="w-1/6 border border-gray-800 rounded-xl p-4 flex flex-col justify-between">
//         <Sidebar />
//       </div>
//       <div>
//         <Cards home={"false"} />
//       </div>
//     </div>
//   );
// };

// export default ImportantTask;


import React, { useEffect, useState } from 'react';

const ImportantTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token'); // Assume token is stored in localStorage
        const response = await fetch('http://localhost:1000/get-imp-tasks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include token in headers
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }

        const data = await response.json();
        setTasks(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Important Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImportantTasks;
