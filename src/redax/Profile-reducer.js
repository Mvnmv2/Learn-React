import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
// Не используем UPDATE_NEW_POST_TEXT т.к. в 76 уроке перешли на Redux-form
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

/*Это State*/

let initialState = {
    postsData: [
        {post: 'This is my fist post from React', id: 1, likeCounts: 10},
        {post: 'It\'s isn\'t hard to do', id: 2, likeCounts: 5},
        {post: 'blblblblba', id: 3, likeCounts: 5},
        {post: 'da da da ', id: 4, likeCounts: 5},
    ],
    //newPostText: '',
    profile: null,
    status: ''
};

/*Это Reducer*/

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                post: action.MessageBody,
                id: 5,
                likeCounts: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                //newPostText: '',
            };
        }
        // Не используем case UPDATE_NEW_POST_TEXT т.к. в 76 уроке перешли на Redux-form
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostText: action.newText,
        //     };
        // }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

/*Это ActionCreators*/

export const addPostActionCreator = (MessageBody) => {
    return {
        type: ADD_POST,
        MessageBody: MessageBody
    }
}
// Не используем updateNewPostTextActionCreator т.к. в 76 уроке перешли на Redux-form
// export const updateNewPostTextActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText: text,
//     }
// }
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

/*Это thunk*/

export const getUserProfile = (userID) => {
    return (dispatch) => {
        if (!userID) {
            userID = 2;
        }
        profileAPI.getProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data));
            });

    }
}
export const getStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getStatus(userID)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}


export default profileReducer;