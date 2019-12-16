import React, { Fragment } from "react";
import config from "../../src/Config";

export default (props) => (
    <Fragment>
        {!props.finished ? (
            <div className="container-fluid position-relative">
            <div id="pageloader-overlay" className="visible incoming mt-2">
                <div className="loader-wrapper-outer">
                    <div className="loader-wrapper-inner">
                        <div className="loader">
                            <img src={config.backURLDefaults + "/deronLoader.png"} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        ) : (
            <Fragment>
                {props.children}
            </Fragment>
        )}
    </Fragment>
);
