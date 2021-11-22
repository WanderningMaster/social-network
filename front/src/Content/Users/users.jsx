import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={s.counter}>
        {pages.map(page => {
            return <span className={props.currentPage === page && s.selected}
                         onClick={() => props.onPageChanged()}>{page}</span>
        })}
    </div>
    {
        props.users.map(user => <div key={user.id}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    {user.username}
                </NavLink>
            </div>
        </div>)
    }
}
export default Users;