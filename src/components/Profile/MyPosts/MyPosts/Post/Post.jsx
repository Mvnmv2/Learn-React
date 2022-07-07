import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {

  return (

    <div className={classes.item}>
      <img src="https://i.pinimg.com/originals/ef/b9/f0/efb9f062aa34d493c031c6a4e329fe29.jpg" alt="SerferPhoto" />
      {props.massage}
      <div>
        <span>
          like:
          <span> {props.likeCounts}</span>
        </span>
      </div>
    </div>

  );
};

export default Post;
