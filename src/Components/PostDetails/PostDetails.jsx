import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {

    const PostDetails = useLoaderData();
    const {title,id,body} = PostDetails ;


    // useNavigate hook  to goBack to the previous page
    const navigate = useNavigate();
    const handleuseNavigation =()=>{
        navigate(-1);
    }


    return (
        <div className='singlepostDetails'>
            <h1>single post details id wala post will be shown here</h1>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>

            {/* go back btn with  usenavigation function */}
            <button onClick={handleuseNavigation}>Go back</button>
        </div>
    );
};

export default PostDetails;