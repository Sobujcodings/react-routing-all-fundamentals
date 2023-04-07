import React from 'react';

import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // const singlefriend = friend ;
    // console.log(singlefriend);

    // akbare destructuring kore fellam
    const { name, address, email, id } = friend;

    return (
            // friends all data 
        <div className='singlecard'>
            <h3>Name:{name}</h3>
            <p>id:{id}</p>
            <p>Address:{address.street}</p>
            <p>Email:{email}</p>

            {/* amra chacchi ekhane click korle ai unique id onujayi single data gulo k amra dekhabo pathabo route e 
            then sekhan theke alada element component e jabe*/}

            {/* static Link/route */}
            {/* <p><Link to='/friend' className='showdetails'>Show details</Link></p> */}


            {/* for dynamic route */}  
            {/* route e id ta padhiye dilam shei id k link e boshiye single user r data fetch kore friendDetails e dekhabo */}
            <p><Link to={`/friend/${id}`} className='showdetails'>Show details</Link></p>


            {/* ekhan theke route er path e pathabo shekhan theke component/element e jabe */}

            {/* ekhane alada kore abar /friend chenar jonno j ai id ta kothaay jabe jei path r sathe match khabe 
            shekhane jabe 2nd to to dynamic tai 1st ta static diye jinish ta k dhora hoice */}
        </div>
    );
};

export default Friend;