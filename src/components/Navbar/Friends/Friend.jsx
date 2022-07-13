import React from "react";
import s from "./Friends.module.css"
import logo1 from "../Navbar_Image/logo1.png"

const Friend = (props) => {
    return (
        <div className={s.FriendItem}>
            <div className={s.Icon}>
                <img src={logo1} alt="Черная кошка"/>
            </div>
            <div className={s.Friend}>{props.name}</div>
        </div>
    );
}


export default Friend;