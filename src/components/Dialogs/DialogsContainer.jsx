import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator,} from "../../redax/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {withAuthRedirect} from "../../hoc/withAuthRedirecr";


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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapToStateProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;