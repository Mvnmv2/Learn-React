import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

let dialogsData = [
    {name: 'Andrey', id: 1},
    {name: 'Vasya', id: 2},
    {name: 'Dart Weider', id: 3},
    {name: 'Jan Clod Van Damm', id: 4},
    {name: 'The man in the taps', id: 5},
    {name: 'Dimych', id: 6},
]

let messagesData = [
    {message: 'Hi bro', id: 1},
    {message: 'How is your React learning?', id: 2},
    {message: 'May be you tray learn Angular?', id: 3},
    {message: 'Yo', id: 4},
    {message: 'Yo Yo', id: 5},
    {message: 'Yo Yo Yo', id: 6},
]

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (<div className={s.Dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    );
}

const Message = (props) => {
    return (
        <div className={s.Messages}>
            <div className={s.Message}>{props.massage}</div>
        </div>
    );
}

const Dialogs = () => {

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.Messages}>
                <Message massage={messagesData[0].message}/>
                <Message massage={messagesData[1].message}/>
                <Message massage={messagesData[2].message}/>
                <Message massage={messagesData[3].message}/>

            </div>
        </div>

    );

}

export default Dialogs;