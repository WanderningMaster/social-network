import React from "react";
import {NavLink} from "react-router-dom";
import s from './navbar.module.css';
import {FaUsers, AiFillHome} from "react-icons/all";
import {connect} from "react-redux";

const Navbar = (props) => {
    return (
        <header className={s.nav}>
            <span>
                <NavLink to='/feed' className={s.button}><AiFillHome/></NavLink>
                <NavLink to='/users' className={s.button}><FaUsers/></NavLink>
            </span>
            <span>
                {props.profile.username ? <NavLink to='/profile' className={s.profile}>{props.profile.username}</NavLink>
                    : <NavLink to='/auth' className={s.profile}>Auth</NavLink>
                }
            </span>
        </header>
    )
}
let mapStateToProps = state => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {})(Navbar);