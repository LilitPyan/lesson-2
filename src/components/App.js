import React from "react";
import Home from '../components/MainContent'


const App = React.createClass({

    componentWillMount: function() {
        this.lock = new Auth0Lock('YOUR_CLIENT_ID', 'YOUR_CLIENT_DOMAIN');
    },
    render: function() {
        return (<Home lock={this.lock} />);
    }
});