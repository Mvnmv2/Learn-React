import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friends/Friend";

import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapToStateProps = (state) => {
    return {
        sidebar: state.sidebar
    }
};
let mapDispatchToProps = (dispatch) => {
    return {

    }
};

const NavbarContainer = connect(mapToStateProps, mapDispatchToProps)(Navbar);



export default NavbarContainer;