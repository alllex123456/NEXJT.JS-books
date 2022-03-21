import Link from 'next/link';
import classes from './Button.module.css';

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={`${classes.btn} ${props.className}`}>{props.children}</a>
      </Link>
    );
  }

  return (
    <Button
      clasName={`${classes.btn} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default Button;
