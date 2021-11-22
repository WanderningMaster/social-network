import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar/navbar";
import LoginContainer from "./Login/loginContainer";
import UsersContainer from "./Content/Users/usersContainer";

const Home = (props) => {
    return <div>
        HelloWorld!
    </div>
}

const App = (props) => {
    const isAuth = true;
    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar className='nav'/>
                <div className='content'>
                    <Routes>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/feed' element={<Home/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        // <LoginContainer/>
    )
}

export default App;
