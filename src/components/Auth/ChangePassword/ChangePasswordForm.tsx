import React, {useRef} from 'react';
import classes from './ChangePassword.module.css';
import Button from "../../UI/Button/Button";
import useCognito from "../../../hooks/auth/useCognito";
import Spinner from "../../UI/Spinner/Spinner";

const ChangePasswordForm: React.FC<{
    onSubmitNewPassword: (event: React.FormEvent, tempPassword: string, newPassowrd: string) => void,
    isLoading: boolean
}> = (props) => {
    const tempPassowrdRef = useRef<HTMLInputElement>(null);
    const passwordInputRef1 = useRef<HTMLInputElement>(null);
    const passwordInputRef2 = useRef<HTMLInputElement>(null);

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // Todo: need to add form validation
        if (passwordInputRef1.current!.value !== passwordInputRef2.current!.value){
            passwordInputRef1.current!.value = '';
            passwordInputRef2.current!.value = '';
        }else {
            if (tempPassowrdRef.current!.value === null) {
                tempPassowrdRef.current!.value = '';
            }else {
                props.onSubmitNewPassword(event, tempPassowrdRef.current!.value, passwordInputRef1.current!.value);
            }
        }
    }

    return (
        <React.Fragment>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div className={classes.title}>Almost done</div>
                <div className={classes.subtitle}>Please setup your password</div>
                <div className={classes.inputContainer}>
                    <label htmlFor="tempPassword" className="placeholder">Your temporary password received in your email</label>
                    <input id="tempPassword" className="input" type="password" ref={tempPassowrdRef}/>
                </div>
                <div className={classes.inputContainer}>
                    <label htmlFor="password1" className="placeholder">Your new password</label>
                    <input id="password1" className="input" type="password" ref={passwordInputRef1}/>
                </div>
                <div className={classes.inputContainer}>
                    <label htmlFor="password2">Re-enter your password</label>
                    <input id="password2" type="password" ref={passwordInputRef2}/>
                </div>
                <Button type='submit'>submit</Button>
            </form>
            {props.isLoading? <Spinner/> : null}
        </React.Fragment>


    )
}

export default ChangePasswordForm;
