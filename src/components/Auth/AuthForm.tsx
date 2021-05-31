import React, {useState} from "react";
import classes from './AuthForm.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";

const AuthForm: React.FC = (props) => {
    const signInCss = `${classes.container} ${classes['left-panel-active']}`
    const signUpCss = `${classes.container} ${classes['right-panel-active']}`
    console.log('auth form')
    const [signinupCSS,setSignupCss] = useState(signInCss);


    const googleSigninHandler = (event: React.MouseEvent) => {
        // console.log("Clicked")
    }

    const switchToSignupHandler = (event: React.MouseEvent) => {
        setSignupCss(signUpCss)
    }

    const switchToSigninHandler = (event: React.MouseEvent) => {
        setSignupCss(signInCss)
    }

    return (
        <section className={classes.auth}>
            <div className={signinupCSS} id="container">
                <div className={`${classes['form-container']} ${classes['sign-up-container']}`}>
                    <form>
                        <h1>Create Account</h1>
                        <div className={classes['social-container']}>
                            <FontAwesomeIcon className={classes.icon} icon={faFacebook} />
                            <FontAwesomeIcon className={classes.icon} icon={faGoogle} />
                            <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button onClick={switchToSignupHandler}>Sign Up</button>
                    </form>
                </div>
                <div className={`${classes['form-container']} ${classes['sign-in-container']}`}>
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className={classes['social-container']}>
                            <FontAwesomeIcon className={classes.icon} icon={faFacebook} />
                            <FontAwesomeIcon className={classes.icon} icon={faGoogle} />
                            <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <a className={classes.icon} href="#">Forgot your password?</a>
                        <button>Sign In</button>
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
