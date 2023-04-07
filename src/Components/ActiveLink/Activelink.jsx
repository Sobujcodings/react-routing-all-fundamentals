import React from 'react';
import { NavLink } from 'react-router-dom';
import './Activelink.css'

// to nibo link r jonno
// children nibo ki ache ta dekhar jonno
// jekhane use korbo shei link ta k Activelink nam dilei connect hoye jabe

const Activelink = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "active" : ""}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default Activelink;