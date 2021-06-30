import React, {useRef, useState} from "react";
import classes from './AuthForm.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Spinner from "../../UI/Spinner/Spinner";


const AuthForm: React.FC<{
    isLoading: boolean,
    onSignIn: (event: React.FormEvent) => void,
    onSignUp: (event: React.FormEvent, inputValue: string) => void
}>
    = (props) => {

    const signinEmailInput = useRef<HTMLInputElement>(null);
    const signinPasswordInput = useRef<HTMLInputElement>(null);
    const signupEmailInput = useRef<HTMLInputElement>(null);
    const signInCss: string = `${classes.container} ${classes['left-panel-active']}`
    const signUpCss: string = `${classes.container} ${classes['right-panel-active']}`


    const [signinupCSS, setSignupCss] = useState(signUpCss);

    const switchToSignupHandler = (event: React.MouseEvent) => {
        setSignupCss(signUpCss)
    }

    const switchToSigninHandler = (event: React.MouseEvent) => {
        setSignupCss(signInCss)
    }

    const signInHandler = (event: React.FormEvent) => {
        props.onSignUp(event, signupEmailInput.current!.value);
    }

    return (
        <React.Fragment>
            <section className={classes.auth}>
                <div className={signinupCSS} id="container">
                    <div className={`${classes['form-container']} ${classes['sign-up-container']}`}>
                        <form onSubmit={signInHandler}>
                            <h1>Create Account</h1>
                            <div className={classes['social-container']}>
                                <FontAwesomeIcon className={classes.icon} icon={faFacebook}/>
                                <FontAwesomeIcon className={classes.icon} icon={faGoogle}/>
                                <FontAwesomeIcon className={classes.icon} icon={faLinkedin}/>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="email" placeholder="email" ref={signupEmailInput}/>
                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                    <div className={`${classes['form-container']} ${classes['sign-in-container']}`}>
                        <form onSubmit={props.onSignIn}>
                            <h1>Sign in</h1>
                            <div className={classes['social-container']}>
                                <FontAwesomeIcon className={classes.icon} icon={faFacebook}/>
                                <FontAwesomeIcon className={classes.icon} icon={faGoogle}/>
                                <FontAwesomeIcon className={classes.icon} icon={faLinkedin}/>
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
                                <button onClick={switchToSigninHandler} className={classes.ghost} id="signIn">Sign In
                                </button>
                            </div>
                            <div className={`${classes['overlay-panel']} ${classes['overlay-right']}`}>
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button onClick={switchToSignupHandler} className={classes.ghost} id="signUp">Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {props.isLoading ? <Spinner/> : null}
        </React.Fragment>

    );
};

export default AuthForm;
