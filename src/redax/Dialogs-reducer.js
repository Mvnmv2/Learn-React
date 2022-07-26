const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageBody,
                id: 7
            };

            state.newMessageBody = '';
            state.messagesData.push(newMessage);
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;

        default:
            return state;
    }
}

export const sendMessageCreator = () => ( { type: SEND_MESSAGE } )

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: body,
})

export default dialogsReducer;