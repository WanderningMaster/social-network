import React from "react";
import {NavLink} from "react-router-dom";
import s from './navbar.module.css';

const Navbar = (props) => {
    return (
        <header>
            <span>
                <NavLink to='/users'className={s.button}>Users</NavLink>
            </span>
        </header>
    )
}
export default Navbar