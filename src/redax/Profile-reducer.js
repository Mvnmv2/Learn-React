import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {post: 'This is my fist post from React', id: 1, likeCounts: 10},
        {post: 'It\'s isn\'t hard to do', id: 2, likeCounts: 5},
        {post: 'blblblblba', id: 3, likeCounts: 5},
        {post: 'da da da ', id: 4, likeCounts: 5},
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                post: state.newPostText,
                id: 5,
                likeCounts: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export const getUserProfile = (userID) => {
    return (dispatch) => {
            if(!userID) {
            userID = 2;
        }
        profileAPI.getProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data));
            });

    }
};


export default profileReducer;