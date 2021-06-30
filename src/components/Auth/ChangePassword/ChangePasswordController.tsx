import React, {useContext} from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import {useLocation, useHistory} from "react-router-dom";
import {AuthContext} from "../../../context/authContext";

const ChangePasswordController:React.FC = (props) => {

    const location = useLocation();
    const history = useHistory();
    const authCtx = useContext(AuthContext);
    const queryParams = new URLSearchParams(location.search);
    const userName = queryParams.get('id')
    console.log(userName);

    const newPasswordSubmitHandler = async (event: React.FormEvent, tempPassword: string, newPassowrd: string) => {
        event.preventDefault();
        const handleResponse = async (data: any) => {
            if (data.error) {
                console.log(data.error)
            } else {
                // console.log(data);
                history.push(`/`);
            }
        }
        await authCtx?.changePassword(userName!, tempPassword, newPassowrd, handleResponse);

    }

  return (
        <ChangePasswordForm isLoading={authCtx!.isLoading} onSubmitNewPassword={newPasswordSubmitHandler}/>
    )
}

export default ChangePasswordController;
