import { key } from 'localforage';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';
import './Post.css'


const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);

    return (
        <div>
            {
                posts.map(post=>
                <SinglePost
                key={post.id}
                post={post}
                ></SinglePost>
                )
            }
        </div>
    );
};

export default Posts;