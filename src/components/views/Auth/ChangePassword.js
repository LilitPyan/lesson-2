import React, { Component, Fragment } from "react";
import {withTranslation} from "react-i18next";
import config from "../../../../src/Config";
import {FetchHeader} from "../../helpers";
import { Redirect, Link } from "react-router-dom";

class ChangePassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            access: false,
            password: "",
            vPassword: false,
            confirmPassword: "",
            vConfirmPassword: false,
            id: null,
            changed: false,
            token: null,
        };

        this.resetPassword = this.resetPassword.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
    }

    componentDidMount() {
        const token = this.props.match.params.token;
        const id = this.props.match.params.id;

        this.setState({
            id,
            token,
        });

        if(token) {
            const data = new FormData();

            data.append("token", token);
            data.append("id", id);

            fetch(config.backURL + "/auth/check-token", {
                method: "POST",
                body: data,
                redirect: "follow",
            })
                .then(response => response.json())
                .then((data) => {
                    if(data.success) {
                        this.setState({
                            access: true,
                        });
                    }
                })


        }
    }

    passwordChange(event) {
        const { value } = event.target;
        const valid = /^[A-Za-z0-9]+$/.test(value) && value.length <= 10;

        this.setState({
            password: value,
            vPassword: valid,
        });
    }

    confirmPasswordChange(event) {
        const { value } = event.target;
        const valid = value == this.state.password;

        this.setState({
            confirmPassword: value,
            vConfirmPassword: valid,
        });
    }

    resetPassword(event) {
        event.preventDefault();
        event.stopPropagation();

        const { password, vPassword, vConfirmPassword, id, token } = this.state;
        const valid = vPassword && vConfirmPassword;

        if(!valid) {
            return;
        } else {
            const data = new FormData(event.target);
            data.append('id', id);
            data.append('token', token);

            const options = {
                method: "POST",
                body: data,
                headers: FetchHeader.makeWith({}),
                redirect: "follow",
            };

            fetch(config.backURL + "/auth/change", options)
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                    if(data.success) {


                        this.setState({
                            changed: true,
                        })
                    }
                })
        }

    }

    render() {
        const { access, password, confirmPassword, vPassword, vConfirmPassword, changed } = this.state;
        const { t } = this.props;
        return (
            <Fragment>
                {access ? <div className="col-sm-4 offset-sm-4 center">
                    <div className="card" >
                        <div className="card-body" >
                            <div className="card-title" > {t('reset_password')} </div>
                            <hr />
                            <form onSubmit={this.resetPassword} method="POST">
                                <div className="form-group">
                                    <label htmlFor="new-password" className="pure-material-textfield-outlined">
                                        <input type="password" className="form-control" name="new_password" id="new-password"
                                               placeholder=" " value={password} onChange={this.passwordChange} />
                                        <span>{t('new_password')}</span>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm-password" className="pure-material-textfield-outlined">
                                        <input type="password" className="form-control" name="confrim_password" id="confirm-password"
                                               placeholder=" " value={confirmPassword} onChange={this.confirmPasswordChange} />
                                        <span>{t('confirm_password')}</span>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-round px-5 float-right"><i
                                        className="icon-lock" /> {t('change_password')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> : <div>
                    <h1 className="h-v-center">
                        <Link to="/auth/login">
                            {t('access_denied')}
                        </Link>
                    </h1>
                </div>}

                {changed && <Redirect to="/auth/login" />}
            </Fragment>
        )
    }
}

export default withTranslation()(ChangePassword);