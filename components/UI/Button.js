import Link from 'next/link';
import classes from './Button.module.css';

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }
  if (props.link) {
    return (
      <Button clasName={classes.btn} onClick={props.onClick}>
        {props.children}
      </Button>
    );
  }
};

export default Button;
