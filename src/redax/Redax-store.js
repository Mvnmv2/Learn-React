import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer from "./users-reducer";
import videosReducer from "./Videos-reduser";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer,
    videosPage: videosReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;