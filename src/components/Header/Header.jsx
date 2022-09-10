import React from 'react';
import s from './Header.module.css';
import logo from './../logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (<header className={s.header}>
            <div className={s.header__logo}>
                <img src={logo} alt="logo"/>
                <div className={s.loginBlock}>
                    {props.isAuth ? props.login :
                        <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>


        </header>
    );
}

export default Header;