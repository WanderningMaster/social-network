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
                {props.isAuth ? <NavLink to={'/profile/' + props.profile.id} className={s.profile}>{props.profile.username}</NavLink>
                    : <NavLink to='/auth' className={s.profile}>Auth</NavLink>
                }
            </span>
        </header>
    )
}
let mapStateToProps = state => ({
    profile: state.login.profile,
    isAuth: state.login.isAuth
})
export default connect(mapStateToProps, {})(Navbar);