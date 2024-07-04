import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {

  const user = useLoaderData()
  const { name, username, email, website, id } = user

  return (
    <div className="card bg-base-300 w-96 mx-auto my-10 shadow-xl">
      <figure>
        <img
          src="https://via.placeholder.com/600/d32776"
          alt="Shoes" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title ">Name: {name}  ID:{id}</h2>
        <p>Username: {username} </p>
        <p> Email: {email}</p>
        <p> Website: {website}</p>
      </div>
    </div>
  );
};

export default UserDetails;