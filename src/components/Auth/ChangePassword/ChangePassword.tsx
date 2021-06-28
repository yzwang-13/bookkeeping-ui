import React, {useRef} from 'react';
import classes from './ChangePassword.module.css';
import Button from "../../UI/Button/Button";
import {CognitoService} from '../AuthService/CognitoService';
import {useLocation} from 'react-router-dom';

const ChangePassword: React.FC = (props) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userName = queryParams.get('id')
    console.log(userName);

    const tempPassowrdRef = useRef<HTMLInputElement>(null);
    const passwordInputRef1 = useRef<HTMLInputElement>(null);
    const passwordInputRef2 = useRef<HTMLInputElement>(null);


    const onSibmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await console.log("aaaa");
        if (passwordInputRef1.current!.value !== passwordInputRef2.current!.value){
            passwordInputRef1.current!.value = '';
            passwordInputRef2.current!.value = '';
        }else {
            if (tempPassowrdRef.current!.value === null) {
                tempPassowrdRef.current!.value = '';
            }
            const cognitoToken = await CognitoService.signIn(userName!, tempPassowrdRef.current!.value, passwordInputRef1.current!.value);
            console.log(cognitoToken);
        }
    }

    return (
        <form className={classes.form} onSubmit={onSibmitHandler}>
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

    )
}

export default ChangePassword;
