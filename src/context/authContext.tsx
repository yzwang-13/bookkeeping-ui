import React, {useCallback, useState} from 'react';
import useHttp from "../hooks/useHttp";

type contextProp = {
    idToken: string | null,
    isLoggedIn: boolean,
    login: (token: string) => void,
    register: ({}: any, applyData: (data: any) => {}) => void,
    logout: () => void
}

export const AuthContext = React.createContext<contextProp | null>({
    idToken: '',
    isLoggedIn: false,
    login: (token: string) => {
    },
    logout: () => {
    },
    register: ({}: any, applyData: (data: any) => {}) => {
    }
});

export const AuthContextProvider: React.FC = (props) => {

    const {register} = useHttp();

    const token = localStorage.getItem('id_token');
    const useIsLoggedIn = !!token;

    const [idToken, setIdToken] = useState<string | null>(null);

    const loginHandler = (token: string) => {
        setIdToken(token);
        localStorage.setItem('id_token', token);

    }

    const logoutHandler = () => {
        setIdToken(null);
        localStorage.removeItem('id_token');
    }

    const registerHandler = (requestConfig = {}, applyData = (data: any) => {}) => {
        // register(requestConfig, applyData);
    };

    const contextValue: contextProp = {
        idToken: idToken,
        isLoggedIn: useIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        register: registerHandler,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
