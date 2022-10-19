import React from "react";
import {Field, reduxForm} from "redux-form";
import classes from "../MyPosts.module.css";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";


const AddPostForm = (props) => {
const maxLength10 = maxLengthCreator(10);
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="textarea" component={Textarea} name={"MessageBody"} id="" cols="30" rows="3" placeholder={"Post" +
                " message"}
                validate={[required, maxLength10]}
                />
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