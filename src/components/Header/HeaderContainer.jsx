import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUserData} from "../../redax/auth-reducer";
import {headerAPI} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
       /* headerAPI.getLogin()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    this.props.setAuthUserData ( id, email, login );
                }
            });*/
    }

    render() {
        return <Header {...this.props} />

    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);