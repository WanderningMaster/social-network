import React from "react";
import s from './profile.module.css';

const Profile = props => {
    return <div className={s.check}>
        {props.profile.username}
    </div>
}
export default Profile;