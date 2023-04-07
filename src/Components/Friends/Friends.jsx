import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {

    // route theke dataload/fetch koriye ekhane recieve korlam
    const friends = useLoaderData();


    //map kore single friend data guloke arekta compo t show korabo tai props diye padhiye dilam agula ager motoi
    // click hobe ai friends link r compo t data dekhabo niye friend compo t

    return (
        <div >
            <h2 className='friendsnum'>These are my Friends: {friends.length}</h2>

            <div className='cards'>
                {
                    friends.map(friend =>
                        <Friend 
                        key={friend.id}
                        friend={friend}
                        ></Friend>
                    )
                }

            </div>

        </div>
    );
};

export default Friends;