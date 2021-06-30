import React, {useContext} from 'react';
import AuthForm from "./AuthForm";
import useHttp from "../../../hooks/useHttp";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../../context/authContext";

const AuthFormController:React.FC = () => {

    const {isLoading, register} = useHttp();
    const history = useHistory();
    const authCtx = useContext(AuthContext);


    const googleSigninHandler = (event: React.MouseEvent) => {
        // console.log("Clicked")
    }



    const signUpSubmitHandler = async (event: React.FormEvent, inputValue: string) => {
        const email = inputValue;
        event.preventDefault();
        console.log('signup form submitted');
        // try {
        //     const newUser = await Auth.signIn({
        //         username: signinEmailInput.current!.value,
        //         password: signinPasswordInput.current!.value,
        //     });
        //     console.log(newUser);
        // } catch (e) {
        //     console.log(e);
        // }
        const handleResponse = async (data: any) => {
            // setIsloading(false);
            if (data.error) {
                console.log("has error")
            } else {
                // console.log(data);
                history.push(`/auth/changePassword?id=${data.User.Username}`);
            }
        }

        const requestConfig = {
            url: 'http://localhost:3000/prod/auth/cognito/signup',
            // url: 'https://api.dailybookkeeping.com.au/auth/cognito/signup',
            method: 'POST',
            body: {email: email},
            headers: {
                'Content-Type': 'application/json',
            }
        }

        // @ts-ignore
        // setIsloading(true);
        // await authCtx?.register(requestConfig, handleResponse);

        await register(requestConfig, handleResponse);


        // history.push('/auth/changePassword')

    }

    const signInSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log('signin form submitted')
        console.log(event);
        // try {
        //     const newUser = await Auth.signIn({
        //         username: signinEmailInput.current!.value,
        //         password: signinPasswordInput.current!.value,
        //     });
        //     console.log(newUser);
        // } catch (e) {
        //     console.log(e);
        // }
        history.push('/auth/changePassword')

    }

    return (
        <AuthForm onSignUp={signUpSubmitHandler} onSignIn={signInSubmitHandler} isLoading={isLoading}/>
    )
}

export default AuthFormController;
