import classes from './Header.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Header = () => {
  const dispatch = useDispatch();
  const isloggedIn = useSelector(state => state.auth.isAuthenticated);
  const logoutHandler = () =>{
    dispatch(authActions.logout());
  };
  const linkHandler = (event) => {
    event.preventDefault();
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      { isloggedIn &&
        <nav>
        <ul>
          <li>
            <a onClick={linkHandler} href='/'>My Products</a>
          </li>
          <li>
            <a onClick={linkHandler} href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      }
    </header>
  );
};

export default Header;
