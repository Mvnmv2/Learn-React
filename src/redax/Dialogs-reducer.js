const SEND_MESSAGE = 'SEND-MESSAGE';
//UPDATE_NEW_MESSAGE_BODY не нужна т.к. с 76 урока перешли на Redux-Form
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogsData: [
        {name: 'Andrey', id: 1},
        {name: 'Vasya', id: 2},
        {name: 'Dart Weider', id: 3},
        {name: 'Jan Clod Van Damm', id: 4},
        {name: 'The man in the taps', id: 5},
        {name: 'Dimych', id: 6},
    ],
    messagesData: [
        {message: 'Hi bro', id: 1},
        {message: 'How is your React learning?', id: 2},
        {message: 'May be you tray learn Angular?', id: 3},
        {message: 'Yo', id: 4},
        {message: 'Yo Yo', id: 5},
        {message: 'Da Da Da', id: 6},
    ]
    //newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                message: action.newMessageBody,
                id: 7
            };

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                //newMessageBody: ''
            };
        }
        //case UPDATE_NEW_MESSAGE_BODY: не нужен т.к. с 76 урока перешли на Redux-Form
        // case UPDATE_NEW_MESSAGE_BODY: {
        //     return {
        //         ...state,
        //         newMessageBody: action.newText,
        //     };
        // }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

//updateNewMessageBodyCreator не нужен т.к. с 76 урока перешли на Redux-Form
// export const updateNewMessageBodyCreator = (body) => ({
//     type: UPDATE_NEW_MESSAGE_BODY,
//     newText: body,
// })

export default dialogsReducer;