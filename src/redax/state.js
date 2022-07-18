import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {post: 'This is my fist post from React', id: 1, likeCounts: 10},
            {post: 'It\'s isn\'t hard to do', id: 2, likeCounts: 5},
            {post: 'blblblblba', id: 3, likeCounts: 5},
            {post: 'da da da ', id: 4, likeCounts: 5},
        ],
        newPostText: 'Hello Rct',
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
    },
    sidebar: {
        friendsData: [
            {name: 'Andrey', id: 1, src: "../Navbar_Image/logo1.png"},
            {name: 'Denis', id: 2, src: "../Navbar_Image/logo1.png"},
            {name: 'Sveta', id: 3, src: "../Navbar_Image/logo2.png"},
        ]
    }

}

export let addPost = () => {
    let newPost = {
        post: state.profilePage.newPostText,
        id: 5,
        likeCounts: 0
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;