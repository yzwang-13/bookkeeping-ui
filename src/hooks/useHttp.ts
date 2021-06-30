import React, {useCallback, useState} from 'react';


const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const postToken = useCallback(async (requestConfig = {}, applyData = ()=> {}) => {
        const loadedTasks = [];
        try {
            setIsLoading(true);
            setError(null);
            let response = null;
            response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : 'GET' ,
                    body: requestConfig.body? JSON.stringify(requestConfig.body): null,
                    headers: requestConfig.headers? requestConfig.headers : {}
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            console.log(data)
            applyData(data);


        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);

    }, []);

    const register = useCallback(async (requestConfig = {}, applyData = ()=> {}) => {
        try {
            setIsLoading(true);
            console.log('set is loading to true');
            await console.log(isLoading);
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
        await console.log(isLoading);
        console.log('set is loading to false');
        setIsLoading(false);

    }, [isLoading, setIsLoading, error, setError]);

    const sendRequest = useCallback(async (requestConfig = {}, applyData = ()=> {}) => {
        const loadedTasks = [];
        try {
            setIsLoading(true);
            setError(null);
            let response = null;
            response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : 'GET' ,
                    body: requestConfig.body? JSON.stringify(requestConfig.body): null,
                    headers: requestConfig.headers? requestConfig.headers : {}
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            console.log(data)
            applyData(data);


        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);

    }, []);

    return {
        isLoading,
        error: error,
        sendRequest: sendRequest,
        register,
    } as const
};

export default useHttp;
