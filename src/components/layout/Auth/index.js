import React, { Component } from "react";
export default class Auth extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="container-fluid">
                <div className="container">
                    Test
                    {this.props.children}
                </div>
            </div>
        );
    }
}