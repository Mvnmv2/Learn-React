import React, {Component} from 'react';
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
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redax/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

library.add(fas, faTwitter, faFontAwesome)


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();

    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavbarContainer/>

                    <div className='app-wrapper-content'>
                        <Routes>

                            <Route path='/profile/*' element={<ProfileContainer/>}/>

                            <Route path='/profile/:userID' element={<ProfileContainer/>}/>

                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>

                            <Route path='/Videos/*' element={<VideosContainer/>}/>

                            <Route path='/News' element={<News/>}/>

                            <Route path='/Music' element={<Music/>}/>

                            <Route path='/Users/*' element={<UsersContainer/>}/>

                            <Route path='/Settings' element={<Settings/>}/>

                            <Route path='/Login' element={<LoginPage/>}/>
                        </Routes>
                    </div>
                </div>

            </BrowserRouter>


        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default connect(mapStateToProps, {initializeApp})(App);
