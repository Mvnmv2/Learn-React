import React from 'react';
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faFontAwesome} from '@fortawesome/free-brands-svg-icons'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import VideosContainer from "./components/Videos/VideosContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

library.add(fas, faTwitter, faFontAwesome)


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>

                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path='/profile/*' element={<ProfileContainer />} />

                        <Route path='/profile/:userID' element={<ProfileContainer/>}/>

                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>

                        <Route path='/Videos/*' element={<VideosContainer/>}/>

                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>

                        <Route path='/users' element={<UsersContainer />}/>

                        <Route path='/Settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>


    );

}


export default App;
