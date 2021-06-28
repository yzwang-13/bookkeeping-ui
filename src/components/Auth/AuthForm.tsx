import React, {useContext, useRef, useState} from "react";
import classes from './AuthForm.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../../context/authContext";


const AuthForm: React.FC = (props) => {
    const signinEmailInput = useRef<HTMLInputElement>(null);
    const signinPasswordInput = useRef<HTMLInputElement>(null);
    const signupEmailInput = useRef<HTMLInputElement>(null);
    const signInCss: string = `${classes.container} ${classes['left-panel-active']}`
    const signUpCss: string= `${classes.container} ${classes['right-panel-active']}`
    console.log('auth form')
    const [signinupCSS,setSignupCss] = useState(signUpCss);
    const history = useHistory();
    const authCtx = useContext(AuthContext);


    const googleSigninHandler = (event: React.MouseEvent) => {
        // console.log("Clicked")
    }

    const switchToSignupHandler = (event: React.MouseEvent) => {
        setSignupCss(signUpCss)
    }

    const switchToSigninHandler = (event: React.MouseEvent) => {
        setSignupCss(signInCss)
    }

    const signUpSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log('signup form submitted')
        // try {
        //     const newUser = await Auth.signIn({
        //         username: signinEmailInput.current!.value,
        //         password: signinPasswordInput.current!.value,
        //     });
        //     console.log(newUser);
        // } catch (e) {
        //     console.log(e);
        // }
        const handleResponse = async (data: any) => {
            if (data.error) {
                console.log("has error")
            } else {

                console.log(data);
                history.push(`/auth/changePassword?id=${data.User.Username}`);
            }
        }
        console.log(signupEmailInput.current!.value);
        const requestConfig = {
            url: 'http://localhost:3000/prod/auth/cognito/signup',
            method: 'POST',
            body: {email: signupEmailInput.current!.value},
            headers: {
                'Content-Type': 'application/json',
            }
        }

        // @ts-ignore
        await authCtx?.register(requestConfig, handleResponse);

        // history.push('/auth/changePassword')

    }

    const signInSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log('signin form submitted')
        console.log(event);
        // try {
        //     const newUser = await Auth.signIn({
        //         username: signinEmailInput.current!.value,
        //         password: signinPasswordInput.current!.value,
        //     });
        //     console.log(newUser);
        // } catch (e) {
        //     console.log(e);
        // }
        history.push('/auth/changePassword')

    }

    return (
        <section className={classes.auth}>
            <div className={signinupCSS} id="container">
                <div className={`${classes['form-container']} ${classes['sign-up-container']}`}>
                    <form onSubmit={signUpSubmitHandler}>
                        <h1>Create Account</h1>
                        <div className={classes['social-container']}>
                            <FontAwesomeIcon className={classes.icon} icon={faFacebook} />
                            <FontAwesomeIcon className={classes.icon} icon={faGoogle} />
                            <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
                        </div>
                        <span>or use your email for registration</span>
                        <input type="email" placeholder="Email" ref={signupEmailInput}/>
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
                <div className={`${classes['form-container']} ${classes['sign-in-container']}`}>
                    <form onSubmit={signInSubmitHandler}>
                        <h1>Sign in</h1>
                        <div className={classes['social-container']}>
                            <FontAwesomeIcon className={classes.icon} icon={faFacebook} />
                            <FontAwesomeIcon className={classes.icon} icon={faGoogle} />
                            <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
                        </div>
                        <span>or use your account</span>
                        <input ref={signinEmailInput} type="email" placeholder="Email"/>
                        <input ref={signinPasswordInput} type="password" placeholder="Password"/>
                        <a className={classes.icon} href="#">Forgot your password?</a>
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
                <div className={classes["overlay-container"]}>
                    <div className={classes.overlay}>
                        <div className={`${classes['overlay-panel']} ${classes['overlay-left']}`}>
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={switchToSigninHandler} className={classes.ghost} id="signIn">Sign In</button>
                        </div>
                        <div className={`${classes['overlay-panel']} ${classes['overlay-right']}`}>
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={switchToSignupHandler} className={classes.ghost} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthForm;
