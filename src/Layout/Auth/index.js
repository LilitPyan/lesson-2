import React, { Component } from "react";
export default class Auth extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                   test
                    {this.props.children}
                </div>
            </div>
        );
    }
}
