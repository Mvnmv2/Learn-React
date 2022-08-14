import React from "react";
import Users from "./UserClassComponent";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redax/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
