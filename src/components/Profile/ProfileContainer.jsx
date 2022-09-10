import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redax/Profile-reducer";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirecr";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.router.params.userID;
        this.props.getUserProfile(userID);
    }

    render() {
       return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);


