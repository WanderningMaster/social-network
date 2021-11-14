import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header/header";
import Navbar from "./Navbar/navbar";
import Users from "./Content/Users/users";
import LoginContainer from "./Login/loginContainer";

const App = (props) => {
    const isAuth = false;
    return (
        <BrowserRouter>
            {isAuth ? (
                    <div className='app'>
                        <Header className='head'/>
                        <Navbar className='nav'/>
                        <div className='content'>
                            <Routes>
                                <Route path='/users' render={() => <Users/>}/>
                            </Routes>
                        </div>
                    </div>
                )
                : <LoginContainer/>
            }
        </BrowserRouter>
    )
}

export default App;
