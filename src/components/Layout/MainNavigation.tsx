import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation: React.FC = () => {

    return (
        <header className={classes.header}>
            <Link to='/'>
                <div className={classes.logo}>Daily Bookkeeping</div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/expenses'>My Expenses</Link>
                    </li>
                    <li>
                        <Link to='/auth'>Login</Link>
                    </li>
                    <li>
                        <Link to='/profile'></Link>
                    </li>
                    <li>
                        <button>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
