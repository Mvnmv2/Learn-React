import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import {sendMessageCreator, updateNewMessageBodyCreator,} from "../../redax/Dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let DialogElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message massage={m.message}/>)
    let newMessageBody = state.newMessageBody;

    //let newDialog = React.createRef();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {DialogElements}
                <textarea className={s.textareaItem} onChange={onNewMessageChange}
                          //ref={newDialog}
                          placeholder='Enter your message!'
                          value={newMessageBody} />
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