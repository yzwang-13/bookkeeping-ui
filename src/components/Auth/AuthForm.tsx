import React from "react";
import classes from './AuthForm.module.css';

const AuthForm: React.FC = (props) => {

    return (
        <section className={classes.auth}>
            <form>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required />
                </div>
                <div className={classes.actions}>
                    <button>Sign in</button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
