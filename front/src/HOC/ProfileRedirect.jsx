import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuth: state.login.isAuth
});
export const profileRedirect = (Component) => {
    class ProfileRedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) return <Navigate to='/profile'/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(ProfileRedirectComponent);
}