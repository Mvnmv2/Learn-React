import React from 'react';
import s from './Navbar.module.css';
import Dialogs from "../Dialogs/Dialogs";
import {NavLink} from "react-router-dom";
import Friend from "./Friends/Friend";

const Navbar = (props) => {

    //let state = props.getState();

    let friendsElements = props.sidebar.friendsData.map(f => <Friend name={f.name} src={f.src}/>)

    return (<nav className={s.nav}>

            <div className={s.item}>
                <NavLink to="/Profile"
                         className={navData => navData.isActive ? s.activeLink : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs"
                         className={navData => navData.isActive ? s.activeLink : s.item}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News"
                         className={navData => navData.isActive ? s.activeLink : s.item}>News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/Videos"
                         className={navData => navData.isActive ? s.activeLink : s.item}>Videos</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music"
                         className={navData => navData.isActive ? s.activeLink : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings"
                         className={navData => navData.isActive ? s.activeLink : s.item}>Settings</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/Users"
                         className={navData => navData.isActive ? s.activeLink : s.item}>Users</NavLink>
            </div>


            <div className={s.friendsTitle}>
                Friends:
            </div>

            <div className={s.friendsTitle__Elements}>
                {friendsElements}
            </div>

        </nav>
    );
}

export default Navbar;