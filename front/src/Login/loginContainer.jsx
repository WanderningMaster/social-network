import React from "react";
import Login from "./login";
import {connect} from "react-redux";
import {AuthMe, GoToSignIn, GoToSignUp, RegAC, RegistrationThunk} from "../state/auth-reducer";
import {compose} from "redux";

class LoginContainer extends React.Component {
    render() {
        return <>
            <Login {...this.props} reg={this.props.reg}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        reg: state.login.reg,
        isAuth: state.login.isAuth
    }
}
export default compose(connect(mapStateToProps, {GoToSignIn, GoToSignUp, RegistrationThunk}))(LoginContainer);
