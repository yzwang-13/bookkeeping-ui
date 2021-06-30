import React, {useCallback, useState} from 'react';
import useHttp from "../hooks/useHttp";
import {prodUrl, devUrl} from "../env/url";

const baseUrl = devUrl;

type contextProp = {
    idToken: string | null,
    isLoggedIn: boolean,
    login: (token: string) => void,
    register: (email:string, handleResponse: (data: string) => void) => void,
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
    register: (email:string, handleResponse: (data:string) => void) => {
    },
    isLoading: false,
});

export const AuthContextProvider: React.FC = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const {httpRequest} = useHttp();

    const token = localStorage.getItem('id_token');
    const useIsLoggedIn = !!token;

    const [idToken, setIdToken] = useState<string | null>(null);

    const loginHandler = (token: string) => {
        setIdToken(token);
        localStorage.setItem('id_token', token);

    }

    const register = async (email: string, handleResponse: (data: string) => void) => {
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
        await httpRequest(requestConfig, handleResponse, errorMessage);
        setIsLoading(false);
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
        isLoading
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
