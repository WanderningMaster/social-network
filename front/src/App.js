import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar/navbar";
import Users from "./Content/Users/users";
import LoginContainer from "./Login/loginContainer";

const App = (props) => {
    const isAuth = true;
    return (
        <BrowserRouter>
            {isAuth ? (
                    <div className='app'>
                        <Navbar className='nav'/>
                        <div className='content'>
                            <Routes>
                                <Route path='/users' render={() => <Users/>}/>
                                {/*<Route path='/feed' render={() => <Home/>}/>*/}
                                {/*<Route path='/profile' render={() => <Profile/>}/>*/}
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
