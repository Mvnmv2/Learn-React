import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator,} from "../../redax/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {withAuthRedirect} from "../../hoc/withAuthRedirecr";
import {compose} from "redux";


let mapToStateProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
};




export default compose(
    connect(mapToStateProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

