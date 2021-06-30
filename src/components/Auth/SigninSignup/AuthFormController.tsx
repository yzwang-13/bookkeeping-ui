import React, {useContext} from 'react';
import AuthForm from "./AuthForm";
import useHttp from "../../../hooks/useHttp";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../../context/authContext";

const AuthFormController:React.FC = () => {

    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const signUpSubmitHandler = async (event: React.FormEvent, inputValue: string) => {
        event.preventDefault();

        const email = inputValue;
        const handleResponse = async (data: any) => {
            if (data.error) {
                console.log("has error")
            } else {
                // console.log(data);
                history.push(`/auth/changePassword?id=${data.User.Username}`);
            }
        }
        authCtx?.register(email, handleResponse);

    }

    const signInSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log('signin form submitted')
        console.log(event);
        history.push('/auth/changePassword')

    }

    return (
        <AuthForm onSignUp={signUpSubmitHandler} onSignIn={signInSubmitHandler} isLoading={authCtx!.isLoading}/>
    )
}

export default AuthFormController;
