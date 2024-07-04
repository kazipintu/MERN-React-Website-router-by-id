import React, { useEffect, useState } from 'react';
import User from './User';
import { useLoaderData } from 'react-router-dom';

const Home = () => {


  // Method-1

  /* 
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []) 
  */

  //Method-2

  const users = useLoaderData()


  return (
    <div className='bg-gray-600 py-16 text-black text-center min-h-screen'>
      <div className='w-[95%] mx-auto grid grid-cols-3 gap-8'>
        {
          users?.map((user) =>
          (<User user={user} key={user.id}></User>

          ))},

      </div>
    </div>
  );
};

export default Home;