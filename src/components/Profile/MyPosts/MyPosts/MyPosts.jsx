import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
    {post: 'This is my fist post from React', id: 1, likeCounts: 10},
    {post: 'It\'s isn\'t hard to do', id: 2, likeCounts: 5},
    ]

const MyPosts = () => {
    return (

        <div className={classes.item}>
            <div className={classes.logo}>
                <b>My posts</b>
            </div>

            <div>
                <textarea name="#" id="" cols="30" rows="3"></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            <div className={classes.item}>
                <Post massage={postsData[0].post} likeCounts={postsData[0].likeCounts}/>
                <Post massage={postsData[1].post} likeCounts={postsData[1].likeCounts}/>

            </div>
        </div>
    );
};

export default MyPosts;
