const ADD_VIDEO = 'ADD_VIDEO';
const DELETE_VIDEO = 'DELETE_VIDEO';
const SET_VIDEO = 'SET_VIDEO';


let initialState = {
    videos: []
}

const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VIDEO:
            return {
                ...state,
                videos: state.videos.map(v => {
                    if (v.id === action.videosID) {
                        return {...v, addToMe: true}
                    }
                    return v;
                }),
            }
        case DELETE_VIDEO:
            return {
                ...state,
                videos: state.videos.map(v => {
                    if (v.id === action.videosID) {
                        return {...v, addToMe: false}
                    }
                    return v;
                }),
            }   
        case SET_VIDEO:
            return {
                ...state,
                videos: action.videos,
            }

        default:
            return state;

    }
}

export const addToMe = (videosID) => ({type: ADD_VIDEO, videosID});
export const deleteToMe = (videosID) => ({type: DELETE_VIDEO, videosID});
export const setVideos = (videos) => ({type: SET_VIDEO, videos});

export default videosReducer;