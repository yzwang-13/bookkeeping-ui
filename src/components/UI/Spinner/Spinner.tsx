import React from "react";
import classes from "./Spinner.module.scss";

const Spinner: React.FC = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.loader} />
        </div>

    )
}

export default Spinner;
