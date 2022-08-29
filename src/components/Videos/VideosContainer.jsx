import React from "react";
import Videos from "./Videos";
import {connect} from "react-redux";
import {addToMe, deleteToMe, setVideos} from "../../redax/Videos-reduser";

let mapToStateProps = (state) => {
    return {
        videos: state.videosPage.videos
    };
}


/*let mapDispatchToProps = (dispatch) => {
    return {
        addToMe: (videosID) => {
            dispatch(addToMeAC(videosID))
        },
        deleteToMe: (videosID) => {
            dispatch(deleteToMeAC(videosID))
        },
        setVideos: (videos) => {
            dispatch(setVideosAC(videos))
        }
    };
}*/

export default connect(mapToStateProps, {addToMe, deleteToMe, setVideos})(Videos);