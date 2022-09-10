import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import { Navigate } from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let DialogElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message massage={m.message}/>)
    let newMessageBody = state.newMessageBody;

    //let newDialog = React.createRef();

    let onSendMessageClick = () => {
        props.SendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if(!props.isAuth) return <Navigate to={'/Login'}/>;

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {DialogElements}
                <textarea className={s.textareaItem} onChange={onNewMessageChange}
                    //ref={newDialog}
                          placeholder='Enter your message!'
                          value={newMessageBody}/>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>

            </div>
            <div className={s.Message}>
                {messagesElements}
            </div>
        </div>

    );

}

export default Dialogs;