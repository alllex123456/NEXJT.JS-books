import { useRef, useState } from 'react';
import classes from './Newsletter.module.css';

const Newsletter = (props) => {
  const [showInput, setShowInput] = useState(true);
  const emailInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    props.onSubscribe(enteredEmail);
    setShowInput(false);
  };

  if (!showInput) {
    return '';
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>Subscribe to our newsletter!</p>
      <input type="email" ref={emailInputRef} />
      <button>Subscribe</button>
    </form>
  );
};

export default Newsletter;
