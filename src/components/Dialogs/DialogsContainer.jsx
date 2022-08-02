import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import {sendMessageCreator, updateNewMessageBodyCreator,} from "../../redax/Dialogs-reducer";
import Dialogs from "./Dialogs";
import storeContext from "../../StoreContext";

const DialogsContainer = () => {

    return (<storeContext.Consumer>
            { store => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

                return (<Dialogs SendMessage={onSendMessageClick}
                                 updateNewMessageBody={onNewMessageChange}
                                 dialogsPage={state}/>)
            }

            }
        </storeContext.Consumer>
    );

}

export default DialogsContainer;