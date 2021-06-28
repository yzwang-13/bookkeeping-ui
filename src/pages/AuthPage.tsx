import React from 'react';
import AuthForm from '../components/Auth/AuthForm';
import {Switch, Route} from 'react-router-dom';
import ChangePassword from "../components/Auth/ChangePassword/ChangePassword";

const AuthPage: React.FC = () => {
    console.log('auth page')

    return (
            <Switch>
                <Route path="/auth/changePassword">
                    <ChangePassword />
                </Route>
                <Route path="/auth">
                    <AuthForm />
                </Route>
            </Switch>
        )

}

export default AuthPage;
