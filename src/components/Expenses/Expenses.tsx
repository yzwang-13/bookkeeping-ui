import React from 'react';
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import classes from './Expenses.module.css';
import Card from "../UI/Card/Card";
import ExpenseItems from "./ExpenseItems/ExpenseItems";
import {ExpenseType} from "../../App";

const Expenses: React.FC<{expenses: ExpenseType[]}> = (props) => {

    return (
        <div className={classes.expenses}>
            <ExpenseItems expenses={props.expenses}/>
        </div>




    )
}

export default Expenses;
