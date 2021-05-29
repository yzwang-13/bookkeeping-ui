import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import classes from './ExpenseItems.module.css'
import {ExpenseType} from "../../../App";

const ExpenseItems: React.FC<{ expenses: ExpenseType[] }> = (props) => {

    const expenses = props.expenses;
    const expensesContent = expenses.map((expense: ExpenseType) => {
        return (
            <ExpenseItem expenseItem={expense}/>
        )
    })

    return (
        <ul className={classes["expenses-list"]}>
            {expensesContent}
        </ul>
    )

}

export default ExpenseItems;
