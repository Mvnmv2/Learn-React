import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"

const Dialogs = (props) => {

    let DialogElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messagesData.map(m => <Message massage={m.message}/>)

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {DialogElements}
            </div>
            <div className={s.Message}>
                {messagesElements}
            </div>
            <div className={s.Message}>
                {messagesElements}
            </div>
        </div>

    );

}

export default Dialogs;