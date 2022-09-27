import React, { Component } from "react";
import logo from "./logo.svg";
import "./profile.css";

class Pro extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:8080/api/test/all")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="Pro">
                <header className="Pro-header">
                    <img src={logo} className="Pro-logo" alt="logo" />
                    {/* <h1 className="Pro-title">Welcome to Profile</h1> */}
                </header>
                <p className="Pro-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default Pro;