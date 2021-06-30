import React from 'react';
import AuthForm from '../components/Auth/SigninSignup/AuthForm';
import {Switch, Route} from 'react-router-dom';
import ChangePasswordForm from "../components/Auth/ChangePassword/ChangePasswordForm";
import AuthFormController from "../components/Auth/SigninSignup/AuthFormController";
import ChangePasswordController from "../components/Auth/ChangePassword/ChangePasswordController";

const AuthPage: React.FC = () => {
    console.log('auth page')

    return (
            <Switch>
                <Route path="/auth/changePassword">
                    <ChangePasswordController />
                </Route>
                <Route path="/auth">
                    <AuthFormController />
                </Route>
            </Switch>
        )

}

export default AuthPage;
