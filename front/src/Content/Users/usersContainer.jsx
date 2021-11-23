import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import {getUsers} from "../../state/users-reducer";
import {authRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";
import {Navigate} from "react-router-dom";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    onPageChanged = () => {
        this.props.getUsers();
    }

    render() {
        return <Users
            users={this.props.users}
            totalUsers={this.props.totalUsers}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth,
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}
export default compose(
    authRedirect, connect(mapStateToProps, {getUsers}))(UsersContainer);