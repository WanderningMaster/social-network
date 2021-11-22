import React from "react";
import Login from "./login";
import {connect} from "react-redux";
import {
    AuthMe,
    GoToSignIn,
    GoToSignUp, LoginThunk,
    PassInvisible,
    PassVisible,
    RegAC,
    RegistrationThunk
} from "../state/auth-reducer";
import {compose} from "redux";

class LoginContainer extends React.Component {
    render() {
        return <>
            <Login {...this.props} isReg={this.props.isReg} isVisible={this.props.isVisible}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        isReg: state.login.isReg,
        isAuth: state.login.isAuth,
        isVisible: state.login.isVisible
    }
}
export default compose(connect(mapStateToProps, {
    GoToSignIn,
    GoToSignUp,
    RegistrationThunk,
    PassVisible,
    PassInvisible,
    LoginThunk
}))(LoginContainer);
