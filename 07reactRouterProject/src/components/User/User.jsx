import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userId} = useParams();
  return (
    <>
        <div className="homeWrapper">
        <span><h1>User: - {userId}</h1></span>
        </div>
    </>
  )
}

export default User
