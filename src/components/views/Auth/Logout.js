import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withTranslation } from "react-i18next";

import { AuthConsumer } from "../../../../src/components/contexts/AuthContext";

class Logout extends Component {
    logoutHandler = null;

    componentDidMount() {
        if (typeof this.logoutHandler == "function") {
            this.logoutHandler();
        }
    }

    render() {
        return (
            <AuthConsumer>
                {({ isAuth, call }) => {
                    if (!isAuth) {
                        return <Redirect to="/" />;
                    }

                    this.logoutHandler = call.logout;

                    return (<div>
                        logging out ...
                    </div>);
                }}
            </AuthConsumer>
        );
    }
}

export default withTranslation()(Logout);
