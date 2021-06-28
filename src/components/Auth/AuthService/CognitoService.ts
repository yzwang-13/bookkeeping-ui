import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';

export class CognitoService {

    private static POOL_INFO = new CognitoUserPool({
        UserPoolId: "ap-southeast-2_MHcajUNDA",
        ClientId: "138ous4gmaf1ev6slmodof0kjj"
    });

   static signIn(username: string, password: string, newPassword: string) {
       return new Promise((resolve, reject) => {
            username = username.toLowerCase().trim();
            const authenticationDetails = new AuthenticationDetails({
                Username: username,
                Password: password,
            });

            const cognitoUser = new CognitoUser({
                Username: username,
                Pool: CognitoService.POOL_INFO
            });

            cognitoUser.authenticateUser(authenticationDetails, {
                newPasswordRequired: function (userAttributes, requiredAttributes) {
                    cognitoUser.completeNewPasswordChallenge(newPassword!, null, {
                        onSuccess: function (result) {
                            resolve(result);
                        },
                        onFailure: function (err) {
                            reject(err);
                        },
                    });
                },
                onSuccess: function (result) {
                    resolve(result);
                },
                onFailure: function (err) {
                    reject(err);
                },
            });
        });
    }

}

