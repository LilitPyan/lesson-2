import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class Error extends Component {
    render() {
        return <div>Error</div>
    }
}

export default withTranslation()(Error);
