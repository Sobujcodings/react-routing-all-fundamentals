import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css'


const SinglePost = ({post}) => {
    console.log(post);
    const {id,body,title} = post ;



    // use navigate hook to go to the previous page
    const navigate = useNavigate();
    const handleuseNavigation =()=>{
        navigate(-1);
    }



    return (
        <div className='singlepost'>
            <h1>{title}</h1>
            <p>{id}</p>
            <p>{body}</p>

            {
                // dynamamic data passing to route
                // <Link to={`/post/${id}`}>Show Post details</Link>
                
                <Link to={`/post/${id}`}><button>Show Post details</button></Link>
                
                /* ai link r same path name diye recive korte hobe ata onno arekta route diye {} */

            }
            


            {/* to go back  to previous page using useNavigations function */}
            <button onClick={handleuseNavigation}>Go back</button>

            

           
        </div>
    );
};

export default SinglePost;