
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Friends from "./components/Navbar/Friends/Friends";

import ReactDOM from 'react-dom'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faFontAwesome} from '@fortawesome/free-brands-svg-icons'


library.add(fas, faTwitter, faFontAwesome)


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar } />

                {/*<Friends state={props.state.sidebar }/>*/}

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile state={props.state.profilePage}  
                                                                   addPost={props.addPost}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs state={props.state.dialogsPage} />}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        {/*<Route path='/Friends/*' element={<Friends state={props.state.friendsData} />}/>*/}

                    </Routes>
                </div>


            </div>

        </BrowserRouter>


    );

}


export default App;
