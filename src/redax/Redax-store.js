import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer from "./users-reducer";
import videosReducer from "./Videos-reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer,
    videosPage: videosReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;