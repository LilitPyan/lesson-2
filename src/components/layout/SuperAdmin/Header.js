import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { AuthConsumer } from "../../contexts/AuthContext";

class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <>
                Header
                </>
        )
    }
}export default withTranslation(Header)