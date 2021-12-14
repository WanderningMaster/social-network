import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Profile from "./profile";
import {getProfile} from "../../state/profile-reducer";
import {withRouter} from "../../HOC/withRouter";
import {getMyProfile} from "../../state/auth-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.location.pathname.slice(9);
        this.props.getProfile(userId);
        this.props.getMyProfile(this.props.id);
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
    connect(mapStateToProps, {getProfile, getMyProfile}),
    withRouter
)(ProfileContainer);