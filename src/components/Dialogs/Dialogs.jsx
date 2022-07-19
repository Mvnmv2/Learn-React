import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"

const Dialogs = (props) => {

    let DialogElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messagesData.map(m => <Message massage={m.message} />)

    let newDialog = React.createRef();

    let addDialog = () => {

        props.addDialog();

    }

    let onDialogChange = () => {
        let text = newDialog.current.value;
        props.updateNewDialogText(text);
    }


    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {DialogElements}
                <textarea onChange={onDialogChange}  ref={newDialog} cols="30" rows="3"
                value={props.dialogsPage.newDialogMessage}/>
                <div>
                    <button onClick={addDialog}>Add text</button>
                </div>

            </div>
            <div className={s.Message}>
                {messagesElements}
            </div>
            {/*<div className={s.Message}>
                {messagesElements}

            </div>*/}


        </div>

    );

}

export default Dialogs;