import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = () => {

    return (

        <storeContext.Consumer>
            { (store) => {

                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return (<MyPosts addPost={addPost}
                                 updateNewPostText={onPostChange}
                                 postsData={state.profilePage.postsData}
                                 newPostText={state.profilePage.newPostText}/>)
            }

            }
        </storeContext.Consumer>
    );
};*/

const mapToStateProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}



const MyPostsContainer = connect(mapToStateProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;
