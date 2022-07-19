import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {addDialog, addPost, updateNewDialogText, updateNewPostText} from "./redax/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {



    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addDialog={addDialog}
                 updateNewDialogText={updateNewDialogText}
            />
        </React.StrictMode>
    );


}


