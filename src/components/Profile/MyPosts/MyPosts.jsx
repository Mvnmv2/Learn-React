import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/state";




const MyPosts = (props) => {

    let postElement = props.postsData.map(p => <Post massage={p.post} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (

        <div className={classes.item}>
            <div className={classes.logo}>
                <h3><b>My posts</b></h3>
            </div>

            <div>
                <textarea onChange={onPostChange} ref={newPostElement} name="#" id="" cols="30" rows="3"
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={classes.item}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;
