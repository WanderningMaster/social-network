import React from "react";
import Home from "./home";
import {connect} from "react-redux";
import {compose} from "redux";
import {authRedirect} from "../../HOC/AuthRedirect";

class HomeContainer extends React.Component {
    render() {
        return <Home {...this.props}/>
    }
}

let mapStateToProps = state => ({})
export default compose(
    authRedirect, connect(mapStateToProps, {}))(HomeContainer);