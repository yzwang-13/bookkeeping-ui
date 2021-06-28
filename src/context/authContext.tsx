import React, {useCallback, useState} from 'react';

type contextProp = {
    idToken: string | null,
    isLoggedIn: boolean,
    login: (token: string) => void,
    register: ({}: object, applyData: (data: any)=>{}) => void,
    logout: () => void
}

export const AuthContext = React.createContext<contextProp | null>({
    idToken: '',
    isLoggedIn: false,
    login: (token: string) => {
    },
    logout: () => {
    },
    register: ({}, applyData: (data: any)=>{}) => {}
});

export const AuthContextProvider: React.FC = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const registerHandler = useCallback(async (requestConfig = {}, applyData = ()=> {}) => {
        try {
            setIsLoading(true);
            setError(null);
            let response = null;
            try {
                response = await fetch(
                    requestConfig.url, {
                        method: requestConfig.method ? requestConfig.method : 'POST' ,
                        body: requestConfig.body? JSON.stringify(requestConfig.body): null,
                        headers: requestConfig.headers? requestConfig.headers : {}
                    }
                );
                if (!response.ok) {
                    throw new Error('register account failed, please try again later');

                }
                const data = await response.json();
                console.log(data);
                applyData(data);
            }catch (e) {
                console.log(e);
                applyData({error: 'register account failed, please try again later'})
            }

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);

    }, []);

    const contextValue: contextProp = {
        idToken: idToken,
        isLoggedIn: useIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        register: registerHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
