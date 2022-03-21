import classes from './Contact.module.css';
import { useRef } from 'react';

const Contact = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.group}>
        <label htmlFor="name">Your name:</label>
        <input id="name" ref={nameInputRef} />
      </div>
      <div className={classes.group}>
        <label htmlFor="email">Your email:</label>
        <input id="email" ref={emailInputRef} />
      </div>
      <div className={classes.group}>
        <label htmlFor="message">Your message:</label>
        <textarea
          id="message"
          ref={messageInputRef}
          rows="5"
          placeholder="Your message..."
        ></textarea>
      </div>
      <button>Send your message</button>
    </form>
  );
};

export default Contact;
