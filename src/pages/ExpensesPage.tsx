import React from 'react';
import Expenses from "../components/Expenses/Expenses";
import {ExpenseType} from "../App";

const ExpensesPage: React.FC<{expenses: ExpenseType[]}> = (props) => {
    return <Expenses expenses={props.expenses} />;
}

export default ExpensesPage;
