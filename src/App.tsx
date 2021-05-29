import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import {Route, Switch, Redirect} from 'react-router-dom';
import ExpensesPage from "./pages/ExpensesPage";
import NewExpensePage from "./pages/NewExpensePage";
import {useAppSelector} from "./app/hooks";

export type ExpenseType = {
    id: string
    timestamp: string,
    category: string
    vendor: string,
    description: string
    price: number
}

function App() {

    const expenses = useAppSelector(state => state.expenses.expenses);
    // console.log(expenses);

    // const Dummy_Expenses: ExpenseType[] = [
    //     {
    //         id: "1",
    //         date: new Date("2021-05-31"),
    //         category: "Eat",
    //         vendor: "KFC",
    //         description: "Chicken",
    //         price: 55
    //     },
    //     {
    //         id: "2",
    //         date: new Date("2021-05-31"),
    //         category: "Transport",
    //         vendor: "Service",
    //         description: "Rego for BZ79HL",
    //         price: 800
    //     },
    //     {
    //         id: "3",
    //         date: new Date("2021-04-31"),
    //         category: "Clothing",
    //         vendor: "Myer",
    //         description: "T-shirt",
    //         price: 100
    //     },
    //     {
    //         id: "4",
    //         date: new Date("2021-04-31"),
    //         category: "Eat",
    //         vendor: "Mcdownald",
    //         description: 'Burger',
    //         price: 25
    //     },
    //     {
    //         id: "5",
    //         date: new Date("2021-02-31"),
    //         category: "Eat",
    //         vendor: "Happy Ending Burgers",
    //         description: 'Burgers',
    //         price: 12
    //     }
    // ]


    return (
        <Layout>
            <Switch>
                <Route path="/auth">
                    <AuthPage/>
                    bookkeeping ui
                </Route>
                <Route path="/expenses">
                    <ExpensesPage expenses={expenses}/>
                </Route>
                <Route path="/new-expense">
                    <NewExpensePage />
                </Route>
                <Route path="*">
                    <Redirect to="/expenses" />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
