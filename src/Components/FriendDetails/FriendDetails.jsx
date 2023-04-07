import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {

    const singleuser = useLoaderData();
    const {name,email,address} = singleuser ;
    // console.log(singleuser);

    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{address.street}</p>
        </div>
    );
};

export default FriendDetails;