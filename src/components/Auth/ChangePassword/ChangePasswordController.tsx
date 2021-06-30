import React from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import {CognitoUserSession} from "amazon-cognito-identity-js";
import {useLocation} from "react-router-dom";
import useCognito from "../../../hooks/auth/useCognito";

const ChangePasswordController:React.FC = (props) => {

    const location = useLocation();
    const {isLoading,signIn} = useCognito();
;    const queryParams = new URLSearchParams(location.search);
    const userName = queryParams.get('id')
    console.log(userName);

    const newPasswordSubmitHandler = async (event: React.FormEvent, tempPassword: string, newPassowrd: string) => {
        event.preventDefault();
        await console.log("aaaa");
        const cognitoToken = await signIn(userName!, tempPassword, newPassowrd);
        console.log(cognitoToken);
        const token = await (cognitoToken as CognitoUserSession).getIdToken().getJwtToken();
        console.log(token)
        console.log('bbbbbb')
    }

  return (
        <ChangePasswordForm isLoading={isLoading} onSubmitNewPassword={newPasswordSubmitHandler}/>
    )
}

export default ChangePasswordController;
