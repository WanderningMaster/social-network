import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import {getUsers} from "../../state/users-reducer";

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
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}
export default connect(mapStateToProps, {getUsers})(UsersContainer);