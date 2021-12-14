import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {getMyProfile} from "../state/auth-reducer";

let mapStateToProps = (state) => ({
    isAuth: state.login.isAuth,
    id: state.login.id
});
export const profileRedirect = (Component) => {
    class ProfileRedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) return <Navigate to={'/profile/' + this.props.id}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps, {getMyProfile})(ProfileRedirectComponent);
}