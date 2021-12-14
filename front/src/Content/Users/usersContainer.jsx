import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import {getUsers} from "../../state/users-reducer";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.size);
    }

    onPageChanged = () => {
        this.props.getUsers(this.props.size);
    }

    render() {
        return <Users
            users={this.props.users}
            totalUsers={this.props.totalUsers}
            size={this.props.size}
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
        currentPage: state.usersPage.currentPage,
        size: state.usersPage.size
    }
}
export default compose(
    connect(mapStateToProps, {getUsers}))(UsersContainer);