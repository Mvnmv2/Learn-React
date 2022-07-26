const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {post: 'This is my fist post from React', id: 1, likeCounts: 10},
                {post: 'It\'s isn\'t hard to do', id: 2, likeCounts: 5},
                {post: 'blblblblba', id: 3, likeCounts: 5},
                {post: 'da da da ', id: 4, likeCounts: 5},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            ],
            newMessageBody: '',
        },
        sidebar: {
            friendsData: [
                {name: 'Andrey', id: 1, src: "../Navbar_Image/logo1.png"},
                {name: 'Denis', id: 2, src: "../Navbar_Image/logo1.png"},
                {name: 'Sveta', id: 3, src: "../Navbar_Image/logo2.png"},
            ]
        }

    },

    _callSubscriber() {
        console.log('Hi');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        /*Function for Profile*/
        if (action.type === ADD_POST) {
            let newPost = {
                post: this._state.profilePage.newPostText,
                id: 5,
                likeCounts: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

            /*Function for Dialogs*/
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                message: this._state.dialogsPage.newMessageBody,
                id: 7
            };

            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push(newMessage);
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newText;
            this._callSubscriber(this._state);
        }
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

export const sendMessageCreator = () => ( { type: SEND_MESSAGE } )



export const updateNewMessageBodyCreator = (body) => ({
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: body,
    })



export default store;
window.store = store;