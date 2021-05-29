import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ExpenseType} from "../App";
import moment from "moment";

type State = { expenses: ExpenseType[] };

const initialState: State = {
    expenses: [
        {
            id: "1",
            timestamp: moment("2021-05-31").unix().toString(),
            category: "Eat",
            vendor: "KFC",
            description: "Chicken",
            price: 55
        },
        {
            id: "2",
            timestamp: moment("2021-05-31").unix().toString(),
            category: "Transport",
            vendor: "Service",
            description: "Rego for BZ79HL",
            price: 800
        },
        {
            id: "3",
            timestamp: moment("2021-04-27").unix().toString(),
            category: "Clothing",
            vendor: "Myer",
            description: "T-shirt",
            price: 100
        },
        {
            id: "4",
            timestamp: moment("2021-03-31").unix().toString(),
            category: "Eat",
            vendor: "Mcdownald",
            description: 'Burger',
            price: 25
        },
        {
            id: "5",
            timestamp: moment("2021-02-28").unix().toString(),
            category: "Eat",
            vendor: "Happy Ending Burgers",
            description: 'Burgers',
            price: 12
        }
    ]
}

const addExpense: CaseReducer<State, PayloadAction<{ expense: ExpenseType }>> = (state, action) => {
    const newExpense: ExpenseType = action.payload.expense;
    state.expenses.push(newExpense);
}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: initialState,
    reducers: {
        addExpense
    }
});

export default expenseSlice.reducer;

export const expenseActions = expenseSlice.actions;
