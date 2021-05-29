import React from 'react';
import classes from './Button.module.css';

const Button: React.FC<React.ComponentProps<'button'>> = (props) => {

    return <button className={classes.btn} {...props}>{props.children}</button>
}

export default Button;
