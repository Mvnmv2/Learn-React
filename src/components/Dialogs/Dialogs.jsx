import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let DialogElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message massage={m.message}/>)
    let newMessageBody = state.newMessageBody;

    //onSendMessageClick мы заменили на addNewMessage т.к. с 76 урока перешли на Redux-Form
    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // }

//onNewMessageChange не нужен т.к. с 76 урока перешли на Redux-Form
    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    // }

    let addNewMessage = (values) => {
        props.SendMessage(values.newMessageBody);
    }

    //if(!props.isAuth) return <Navigate to={'/Login'}/>;

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {DialogElements}
            </div>

            {/*<textarea className={s.textareaItem} onChange={onNewMessageChange}*/}
            {/*          value={newMessageBody}/>*/}
            <div className={s.Message}>
                {messagesElements}
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>

    )
}

const maxLength100 = maxLengthCreator(100);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.textareaItem}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter your message!" id="#" cols="30"
                       rows="3" validate={[required, maxLength100]} />
                {/*<textarea className={s.textareaItem} onChange={onNewMessageChange}*/}
                {/*          value={newMessageBody}/>*/}
            </div>
            <div>
                <button className={s.btn}>Send</button>
            </div>
        </form>
    )
}


const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;