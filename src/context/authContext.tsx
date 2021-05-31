import React, {useState} from 'react';

type contextProp = {
    idToken: string | null,
    isLoggedIn: boolean,
    login: (token: string) => void,
    logout: () => void
}



export const AuthContext = React.createContext<contextProp | null>({
    idToken: '',
    isLoggedIn: false,
    login: (token: string) => {
    },
    logout: () => {
    }
});

export const AuthContextProvider: React.FC = (props) => {

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


    const contextValue: contextProp = {
        idToken: idToken,
        isLoggedIn: useIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
