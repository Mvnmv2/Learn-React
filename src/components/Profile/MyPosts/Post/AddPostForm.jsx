import React from "react";
import {Field, reduxForm} from "redux-form";
import classes from "../MyPosts.module.css";


const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"MessageBody"} id="" cols="30" rows="3" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const AddPostFormRedux = reduxForm({form: 'PostForm'})(AddPostForm);

const PostForm = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={classes.logo}>
            <AddPostFormRedux onSubmit={props.onSubmit} />

        </div>


    )
}


export default PostForm;