import React, {useContext} from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import {Route, Switch, Redirect} from 'react-router-dom';
import ExpensesPage from "./pages/ExpensesPage";
import NewExpensePage from "./pages/NewExpensePage";
import {useAppSelector} from "./app/hooks";
import {AuthContext} from "./context/authContext";

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
    const authCtx = useContext(AuthContext);

    return (
        <Layout>
            <Switch>
                {!authCtx?.isLoggedIn &&
                <Route path="/auth">
                    <AuthPage/>
                </Route>}
                {authCtx?.isLoggedIn &&
                <React.Fragment>
                    <Route path="/expenses">
                        <ExpensesPage expenses={expenses}/>
                    </Route>
                    <Route path="/new-expense">
                        <NewExpensePage/>
                    </Route>
                </React.Fragment>
                }
                <Route path="*">
                    <Redirect to="/auth"/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
