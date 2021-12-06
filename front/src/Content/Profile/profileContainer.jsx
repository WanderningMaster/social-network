import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {authRedirect} from "../../HOC/AuthRedirect";
import Profile from "./profile";
import {getProfile} from "../../state/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.id);
    }
    render() {
        return <Profile {...this.props}
        profile={this.props.profile}/>
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    id: state.login.id
})
export default compose(
    authRedirect, connect(mapStateToProps, {getProfile}))(ProfileContainer);