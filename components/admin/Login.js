import { useRef } from 'react';
import classes from './Login.module.css';

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loginHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    props.onSignIn(enteredEmail, enteredPassword);
  };

  return (
    <div className={classes.loginContainer}>
      <h1>Admin Panel Login</h1>
      <form className={classes.loginForm} onSubmit={loginHandler}>
        <input type="email" placeholder="User e-mail" ref={emailInputRef} />
        <input type="password" placeholder="Password" ref={passwordInputRef} />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
