import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Activelink from '../ActiveLink/Activelink';

// Akta navbar banalam ekhane link korle shei link gulote jabe r kon link dile kothay jabe ta to amra main e bolei ashchi

// to avoid page loading everytime we will use Link  instead of anchor a
// a    to   Link
// href to   to

const Header = () => {
    return (

        // link r  path r sathe route r path same hote hobe taholei link click  korle route e jeye then element e jabe
        <div>
            <nav className='navbar'>
                <Activelink to="/">Home</Activelink>
                <Activelink to="/friends">Friends</Activelink>
                <Activelink to="/about">About</Activelink>
                <Activelink to="/contact">Contact</Activelink>
                <Activelink to="/posts">Posts</Activelink>
            </nav>
        </div>
    );
};

export default Header;