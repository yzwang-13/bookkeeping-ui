import React, {forwardRef, ReactNode, Ref, RefAttributes} from 'react';
import classes from './DatePicker.module.css';


const DatePicker: React.ForwardRefExoticComponent<RefAttributes<HTMLInputElement>>
    = forwardRef<HTMLInputElement>
((props, ref) => {
    return (
        <div className={classes['new-expense__controls']}>
            <div className={classes["new-expense__control"]}>
                <label>Date</label>
                <input
                    type='date'
                    min='2019-01-01'
                    max='2022-12-31'
                    ref={ref}
                />
            </div>
        </div>

    );
});

export default DatePicker;
