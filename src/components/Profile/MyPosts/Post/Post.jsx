import React from "react";
import classes from "./Post.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Post = (props) => {

    return (

        <div className={classes.item}>
            <div className="messageImg">
                <img src="https://i.pinimg.com/originals/ef/b9/f0/efb9f062aa34d493c031c6a4e329fe29.jpg"
                     alt="SerferPhoto"/>
            </div>

            <div className={classes.messageItem}>
                {props.massage}
            </div>
            <div className={classes.likes}>
                <span className={classes.Icon}>
                    <FontAwesomeIcon icon="fa-solid fa-thumbs-up"/>
                </span>

                <span> {props.likeCounts}</span>

            </div>
        </div>

    );
};

export default Post;
