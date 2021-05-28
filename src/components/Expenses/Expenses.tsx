import React from 'react';
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import classes from './Expenses.module.css';

const Expenses: React.FC = (props) => {

    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    <th>Category 1</th>
                    <th>Category 2</th>
                    <th>Category 3</th>
                    <th>Category 4</th>
                    <th>Category 5</th>
                    <th>Category 6</th>
                </tr>
            </thead>
            <tbody>
                <ExpenseItem />
            </tbody>
        </table>


    )
}

export default Expenses;
