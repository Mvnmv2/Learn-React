import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElement = props.postsData.map(p => <Post massage={p.post} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( {type: 'ADD-POST'} );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
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
