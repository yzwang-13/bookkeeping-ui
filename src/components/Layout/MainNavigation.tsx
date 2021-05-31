import {Link, useHistory, useParams} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import Button from "../UI/Button/Button";
import {useContext} from "react";
import {AuthContext} from "../../context/authContext";

const MainNavigation: React.FC = () => {

    const authCtx = useContext(AuthContext);
    const history = useHistory();
    // const params = useParams();
    console.log('main nav')
    console.log(history.location.pathname);

    const isAuth = history.location.pathname.startsWith('/auth');

    const loginHandler = () => {
        history.replace('/auth');
    }

    return (
        <header className={classes.header}>
            <Link to='/'>
                <div className={classes.logo}>Daily Bookkeeping</div>
            </Link>
            <nav>
                <ul>
                    {authCtx?.isLoggedIn &&
                    <li>
                        <Link to='/expenses'>My Expenses</Link>
                    </li>}
                    {authCtx?.isLoggedIn &&
                    <li>
                        <Link to='/new-expense'>Add New Expense</Link>
                    </li>}
                    {/*{!authCtx?.isLoggedIn && !isAuth &&*/}
                    {/*<li>*/}
                    {/*    <Button onClick={loginHandler}>Login</Button>*/}
                    {/*</li>}*/}
                    {authCtx?.isLoggedIn &&
                    <li>
                        <Button>Logout</Button>
                    </li>}
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
