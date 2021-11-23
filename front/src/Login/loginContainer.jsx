import React from "react";
import Login from "./login";
import {connect} from "react-redux";
import {
    GoToSignIn,
    GoToSignUp, LoginThunk,
    PassInvisible,
    PassVisible,
    RegistrationThunk
} from "../state/auth-reducer";
import {profileRedirect} from "../HOC/ProfileRedirect";
import {compose} from "redux";

class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props} isReg={this.props.isReg} isVisible={this.props.isVisible}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isReg: state.login.isReg,
        isVisible: state.login.isVisible
    }
}
export default compose(
   profileRedirect, connect(mapStateToProps, {
        GoToSignIn,
        GoToSignUp,
        RegistrationThunk,
        PassVisible,
        PassInvisible,
        LoginThunk
    }))(LoginContainer);
