import React from 'react';
import classes from './ExpenseItem.module.css';
import {ExpenseType} from "../../../App";
import moment from "moment";

const ExpenseItem: React.FC<{expenseItem: ExpenseType}> = (props) => {


    console.log(props.expenseItem);

    const dateOutput = moment.unix(+props.expenseItem.timestamp).format('DD-MM-YYYY');

    return (
            <li>
                <div className={classes['expense-item']}>
                    <div>{dateOutput}</div>
                    <div className={classes['expense-item__description']}>
                        <h2>{props.expenseItem.category}</h2>
                        <h2>{props.expenseItem.vendor}</h2>
                        <div className={classes['expense-item__price']}>${props.expenseItem.price}</div>
                    </div>
                </div>
            </li>

    )
}

export default ExpenseItem
