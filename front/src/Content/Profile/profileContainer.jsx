import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {authRedirect} from "../../HOC/AuthRedirect";
import Profile from "./profile";

class ProfileContainer extends React.Component {
    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = state => ({})
export default compose(
    authRedirect, connect(mapStateToProps, {}))(ProfileContainer);