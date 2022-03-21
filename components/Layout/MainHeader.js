import Button from '../UI/Button';
import classes from './MainHeader.module.css';
import { useContext } from 'react';
import AdminContext from '../../context';
import { Fragment } from 'react';

const MainHeader = () => {
  const adminCtx = useContext(AdminContext);
  const { token } = adminCtx;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <a href="/">
          <h1>BooksStore</h1>
        </a>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            {!token && (
              <Fragment>
                <Button link="/books">See Featured Books</Button>
                <Button className={classes.contact} link="/contact">
                  Contact us
                </Button>
              </Fragment>
            )}
            {token && <Button link="/books">Add Books</Button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
