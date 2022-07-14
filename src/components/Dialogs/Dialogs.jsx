import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"

const Dialogs = (props) => {

    let DialogElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messagesData.map(m => <Message massage={m.message}/>)

    let newDialog = React.createRef();

    let addDialog = () => {
        let text = newDialog.current.value;
        alert(text);
    }


    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {DialogElements}
                <textarea ref={newDialog} cols="30" rows="3"></textarea>
                <div>
                    <button onClick={addDialog}>Add text</button>
                </div>

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