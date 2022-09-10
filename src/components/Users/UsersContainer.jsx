import React from 'react';
import {connect} from 'react-redux';
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow
} from '../../redax/users-reducer';
import Users from './UsersPresentialComponent';
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /* if (this.props.users.length === 0) {
             this.props.toggleIsFetching(true);

             usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

                 this.props.toggleIsFetching(false);
                 this.props.setUsers(data.items);
                 this.props.setTotalUsersCount(data.totalCount);
             });
         }*/
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers( pageNumber, this.props.pageSize);
    };


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

/*let mapDispatchToProps = (dispatch) => {
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
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}*/


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers,
})(UsersContainer);
