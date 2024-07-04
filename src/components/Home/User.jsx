import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {

  const { name, id, username, email } = user;

  return (
    <div className="card bg-base-200 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title ">Name: {name}  ID:{id}</h2>
        <p>Username: {username} </p>
        <p> Email: {email}</p>
        <div className="card-actions justify-end">
          <Link to={`/user-details/${id}`}><button className="btn btn-primary">User Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default User;