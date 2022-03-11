import Button from '../UI/Button';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>BooksLibrary</h1>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Button link="/">See Featured Books</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
