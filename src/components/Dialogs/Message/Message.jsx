import React from "react";
import s from "./../Dialogs.module.css"

const Message = (props) => {
    return (
        <div className={s.Messages}>
            <div className={s.Message}>{props.massage}</div>
        </div>
    );
}


export default Message;