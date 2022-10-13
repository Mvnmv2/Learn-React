import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/Profile-reducer";
import PostForm from "./Post/AddPostForm";

const MyPosts = (props) => {

    let postElement = props.postsData.map(p => <Post massage={p.post} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef();

    // Не используем onAddPost т.к. в 76 уроке перешли на Redux-form
    // let onAddPost = () => {
    //     props.addPost();
    // }

    let addNewPost = (values) => {
        props.addPost(values.MessageBody);
    }

    // Не используем onPostChange т.к. в 76 уроке перешли на Redux-form
    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text);
    // }

    return (

        <div className={classes.item}>
            <div className={classes.logo}>
                <h3><b>My posts</b></h3>
            </div>
            <PostForm onSubmit={addNewPost}/>

            {/*<div>
                <textarea onChange={onPostChange} ref={newPostElement} name="#" id="" cols="30" rows="3"
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>*/}

            <div className={classes.item}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;
