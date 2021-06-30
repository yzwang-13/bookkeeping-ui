import React, {useCallback, useState} from 'react';
import useHttp from "../hooks/useHttp";
import {prodUrl, devUrl} from "../env/url";
import useCognito from "../hooks/auth/useCognito";
import {CognitoUserSession} from "amazon-cognito-identity-js";

const baseUrl = devUrl;

type contextProp = {
    idToken: string | null,
    isLoggedIn: boolean,
    login: (token: string) => void,
    register: (email: string, responseHandler: (data: string) => void) => void,
    changePassword: (userName: string, tempPassword: string, newPassowrd: string,  responseHandler: (data: string) => void) => void
    logout: () => void,
    isLoading: boolean,
}


export const AuthContext = React.createContext<contextProp | null>({
    idToken: '',
    isLoggedIn: false,
    login: (token: string) => {
    },
    logout: () => {
    },
    register: (email: string, responseHandler: (data: string) => void) => {
    },
    changePassword: (userName: string, tempPassword: string, newPassowrd: string, responseHandler: (data: string) => void) => {
    },
    isLoading: false,
});

export const AuthContextProvider: React.FC = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const {httpRequest} = useHttp();
    const {signIn} = useCognito();

    const token = localStorage.getItem('id_token');
    const useIsLoggedIn = !!token;

    const [idToken, setIdToken] = useState<string | null>(null);

    const loginHandler = (token: string) => {
        setIdToken(token);
        localStorage.setItem('id_token', token);

    }

    const register = async (email: string, responseHandler: (data: string) => void) => {
        setIsLoading(true);
        console.log('account registering...');
        const requestConfig = {
            url: baseUrl + '/auth/cognito/signup',
            method: 'POST',
            body: {email: email},
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const errorMessage = {
            error: 'Register account failed, please try again later'
        }
        await httpRequest(requestConfig, responseHandler, errorMessage);
        setIsLoading(false);
    }

    const changePassword = async (userName: string, tempPassword: string, newPassowrd: string, responseHandler: (data: string) => void) => {
        setIsLoading(true);

        try {
            const cognitoToken = await signIn(userName!, tempPassword, newPassowrd);
            const token = await (cognitoToken as CognitoUserSession).getIdToken().getJwtToken();
            console.log(token);

            await postToken('cognito', token, responseHandler);
        } catch (e) {
            console.log(e.message)
        }

        setIsLoading(false);

    }

    const postToken = async (name: string, token: string, responseHandler: (data: string) => void) => {
        const requestConfig = {
            url: baseUrl + '/auth/token',
            method: 'POST',
            body: {name, token},
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await httpRequest(
            requestConfig, responseHandler, {error: 'PostToken failed'}
        )
        // setIdToken(response['IdToken']);
        // setRefreshToken(response['RefreshToken']);
    }


    const logoutHandler = () => {
        setIdToken(null);
        localStorage.removeItem('id_token');
    }


    const contextValue: contextProp = {
        idToken: idToken,
        isLoggedIn: useIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        register,
        changePassword,
        isLoading
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
