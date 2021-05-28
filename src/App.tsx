import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import {Route, Switch} from 'react-router-dom';
import ExpensesPage from "./pages/ExpensesPage";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/auth">
                    <AuthPage/>
                    bookkeeping ui
                </Route>
                <Route path="/expenses">
                    <ExpensesPage/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
