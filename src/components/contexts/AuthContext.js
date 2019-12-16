import React, { Component } from "react";
import { FetchHeader } from "../helpers";
import config from "../../Config";

const AuthContext = React.createContext();
const AuthConsumer = AuthContext.Consumer;

let context = null;
class AuthProvider extends Component {
    state = {
        isAuth: false,
        user: null,
        call: {
            initialize: this.initialize,
            login: this.login,
            logout: this.logout,
        },
        vInfo: "",
        vEmail: "",
        vPassword: "",
        vUsername: "",
    };

    constructor(props) {
        super(props);

        this.initialize = this.initialize.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        context = this;
    }

    login(data) {
        return new Promise((resolve, reject) => {
            fetch(config.backURL + "/auth/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                },
                redirect:'follow'
            }).then((response) => {
                if (!response.ok) {
                    // reject(response);

                    response.json()
                        .then((data) => {
                            if(data.errors.invalid) {
                                context.setState({
                                    vInfo: data.errors.invalid,
                                    vEmail: "",
                                    vPassword: "",
                                    vUsername: "",
                                });
                            } else if(data.errors.email || data.errors.password || data.errors.username ) {
                                if(data.errors.email) {
                                    context.setState({
                                        vEmail: data.errors.email
                                    });
                                }

                                if(data.errors.password) {
                                    context.setState({
                                        vPassword: data.errors.password
                                    });
                                }
                                if(data.errors.username) {
                                    context.setState({
                                        vUsername: data.errors.username
                                    });
                                }
                            }
                        });
                } else {
                    response.json()
                        .then((json) => {
                            localStorage.setItem("access_token", json.access_token);
                            localStorage.setItem("logged_user", JSON.stringify(json.user));
                            context.setState({
                                isAuth: true,
                                user: json.user
                            }, () => {
                                resolve(response);
                            });
                        });
                }
            });
        });
    }

    initialize() {
        return new Promise((resolve, reject) => {
            if (localStorage.getItem("access_token")) {
                FetchHeader.setFetchHeader("Authorization", `Bearer ${localStorage.getItem("access_token")}`);

                let user = localStorage.getItem("logged_user");
                if (null != user) {
                    user = JSON.parse(user);
                }

                context.setState({
                    isAuth: null != user,
                    user,
                }, resolve);
            } else {
                resolve();
            }
        });
    }

    logout() {
        context.setState({
            isAuth: false,
            user: null,
        });

        localStorage.removeItem("access_token");
        localStorage.removeItem("logged_user");
        FetchHeader.deleteFetchHeader("Authorization");

        return new Promise((resolve, reject) => {
            fetch(config.backURL + "/auth/logout")
                .then((response) => {
                    if (!response.ok) {
                        reject(response);
                    } else {
                        resolve();
                    }
                });
        });
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export {
    AuthProvider,
    AuthConsumer,
};
