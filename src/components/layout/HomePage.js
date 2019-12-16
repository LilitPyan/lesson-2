import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../../../src/components/contexts/AuthContext";

export default () => {
    return (
        <AuthConsumer>
            {({ isAuth, user }) => {
                if (!isAuth) {
                    return <Redirect to="/auth/login" />;
                }

                switch (user.role) {
                    case "super_admin":
                        return <Redirect to="/super-admin/stores" />;

                    case "admin":
                        return <Redirect to="/admin/dashboard" />;

                    case "partner":
                        return <Redirect to="/partner/dashboard" />;

                    case "worker":
                        return <Redirect to="/worker/dashboard" />;

                    case "client":
                        return <Redirect to="/client/dashboard" />;
                }

                return <Redirect to="/auth/login" />;
            }}
        </AuthConsumer>
    );
};
