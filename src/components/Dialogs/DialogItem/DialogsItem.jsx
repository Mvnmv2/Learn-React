import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.Dialog + ' ' + s.active}>

               <FontAwesomeIcon className={s.Icon} icon="fa-solid fa-circle-user" />

            <div className={s.Messages}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>



        </div>

    );
}


export default DialogItem;