import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.Dialog}>

               <FontAwesomeIcon className={s.Icon} icon="fa-solid fa-circle-user" />

            <div >
                <NavLink className={Data => Data.isActive ? s.active : s.DialogsItem} to={path}>{props.name}</NavLink>
            </div>



        </div>

    );
}


export default DialogItem;