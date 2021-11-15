import React from "react";
import {NavLink} from "react-router-dom";
import s from './navbar.module.css';
import {FaUsers, AiFillHome} from "react-icons/all";

const Navbar = (props) => {
    return (
        <header className={s.nav}>
            <span>
                <NavLink to='/feed' className={s.button}><AiFillHome/></NavLink>
                <NavLink to='/users' className={s.button}><FaUsers/></NavLink>
            </span>
            <span>
                {/*{props.user.photo !== null*/}
                {/*    ? <img src={props.user.photo}/>*/}
                {/*    : <></>*/}
                {/*}*/}
                <NavLink to='/profile' className={s.profile}>Name</NavLink>
            </span>
        </header>
    )
}
export default Navbar