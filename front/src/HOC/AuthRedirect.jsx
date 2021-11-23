import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuth: state.login.isAuth
});
export const authRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='/auth'/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}