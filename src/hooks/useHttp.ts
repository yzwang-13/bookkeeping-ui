import React, {useCallback, useState} from 'react';

const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const httpRequest = useCallback(async (requestConfig = {}, applyData = () => {
    }, errorMessage: { error: string }) => {
        try {
            setIsLoading(true);
            console.log('sending request...');
            setError(null);
            let response = null;
            try {
                response = await fetch(
                    requestConfig.url,
                    {
                        method: requestConfig.method ? requestConfig.method : 'POST',
                        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                        headers: requestConfig.headers ? requestConfig.headers : {
                            'Content-Type': 'application/json',
                        }
                    }
                );
                if (!response.ok) {
                    throw new Error(errorMessage.error);
                    // throw new Error('register account failed, please try again later');

                }
                const data = await response.json();
                console.log(data);
                applyData(data);
            } catch (e) {
                console.log(e);
                applyData({error: errorMessage.error})
            }

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        await console.log(isLoading);
        console.log('set is loading to false');
        setIsLoading(false);

    }, [isLoading, setIsLoading, error, setError]);

    return {
        isLoading,
        error: error,
        httpRequest,
    } as const
};

export default useHttp;
