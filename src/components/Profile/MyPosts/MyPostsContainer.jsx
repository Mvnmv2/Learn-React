import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/Profile-reducer";
import MyPosts from "./MyPosts";
import storeContext from "../../../StoreContext";

const MyPostsContainer = () => {

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
};

export default MyPostsContainer;
