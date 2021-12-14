import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar/navbar";
import LoginContainer from "./Login/loginContainer";
import UsersContainer from "./Content/Users/usersContainer";
import HomeContainer from "./Content/Home/homeContainer";
import ProfileContainer from "./Content/Profile/profileContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar className='nav'/>
                <div className='content'>
                    <Routes>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/feed' element={<HomeContainer/>}/>
                        <Route path='/profile/:id' element={<ProfileContainer/>}/>
                        <Route path='/auth' element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
