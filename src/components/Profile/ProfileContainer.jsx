import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redax/Profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);


