import React, { Component } from "react";
import {withTranslation} from "react-i18next";
import config from "../../../../src/Config";
import {FetchHeader} from "../../helpers";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class Forgot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            vEmail: false,
            sent: false,
            loading: false,
            errorToSend: false,
        };

        this.sendEmail = this.sendEmail.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    validateEmail(email)
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            return (true)
        }

        return (false)
    }

    emailChange(event) {
        const { value } = event.target;
        const valid = value !== "" && this.validateEmail(value);

        this.setState({
            email: value,
            vEmail: valid,
        });
    }

    sendEmail(event) {
        event.preventDefault();
        event.stopPropagation();

        this.setState({
            loading: true,
        });

        const { vEmail } = this.state;

        if(!vEmail) {

            this.setState({
                loading: false,
                errorToSend: true,
            });

            return;
        } else {
            const data = new FormData(event.target);

            const options = {
                method: "POST",
                body: data,
                headers: FetchHeader.makeWith({
                    'Accept': 'application/json',
                }),
                redirect: "follow",
            };

            fetch(config.backURL + "/auth/forgot", options)
                .then(response => response.json())
                .then((data) => {
                    if(data.success) {
                        this.setState({
                            sent: true,
                            loading: false,
                            errorToSend: false,
                        });


                    }
                })
        }
    }

    render () {
        const { t } = this.props;
        const { email, sent, loading } = this.state;

        return (
            <div className="col-sm-3 offset-sm-4 center">
                <div className="card" >
                    <div className="card-body" >
                        <div className="card-title" > {t('reset_password')} </div>
                        <hr />
                        <form onSubmit={this.sendEmail} method="POST">
                            <div className="form-group">
                                <label htmlFor="email" className="pure-material-textfield-outlined">
                                    <input type="text" className="form-control" name="email" id="email"
                                       placeholder=" " value={email} onChange={this.emailChange} />
                                    <span>{t('email')}</span>
                                </label>
                            </div>
                            <div className="form-group">
                                {/*<button type="submit" className="btn btn-success btn-round px-5 float-right" disabled={sent}>
                                    {sent && <Fragment><i className="fas fa-check" /> {t('sent')}</Fragment>}
                                    <Fragment><i className="icon-lock" /> {t('send_email')}</Fragment>
                                </button>*/}
                                <Link to="/super-admin/auth/login" className="text-black font-weight-bold">
                                    {t('login')}
                                </Link>
                                <Button
                                    variant="primary"
                                    disabled={loading || sent}
                                    className="float-right btn-success"
                                >
                                    {loading ? t('loading') : t('send')}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Forgot);