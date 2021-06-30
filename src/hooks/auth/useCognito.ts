import React, {useState} from 'react';
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';


const useCognito = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const POOL_INFO = new CognitoUserPool({
        UserPoolId: "ap-southeast-2_MHcajUNDA",
        ClientId: "138ous4gmaf1ev6slmodof0kjj"
    });

    const signIn = (username: string, password: string, newPassword: string) => {
        return new Promise((resolve, reject) => {
            setIsLoading(true);
            username = username.toLowerCase().trim();
            const authenticationDetails = new AuthenticationDetails({
                Username: username,
                Password: password,
            });

            const cognitoUser = new CognitoUser({
                Username: username,
                Pool: POOL_INFO
            });

            cognitoUser.authenticateUser(authenticationDetails, {
                newPasswordRequired: function (userAttributes, requiredAttributes) {
                    cognitoUser.completeNewPasswordChallenge(newPassword!, null, {
                        onSuccess: function (result) {
                            setIsLoading(false);
                            resolve(result);
                        },
                        onFailure: function (err) {
                            setIsLoading(false);
                            setError(err);
                            reject(err);
                        },
                    });
                },
                onSuccess: function (result) {
                    setIsLoading(false);
                    resolve(result);
                },
                onFailure: function (err) {
                    setIsLoading(false);
                    setError(err);
                    reject(err);
                },
            });
        });
    }
    return {
        isLoading,
        error,
        signIn
    } as const
}

export default useCognito;
