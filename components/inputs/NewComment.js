import { useRef } from 'react';

import classes from './NewComment.module.css';

const NewComment = (props) => {
  const nameInputRef = useRef();
  const textInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (enteredName === '' || enteredText === '') {
      return;
    }

    props.onSubmitComment(enteredName, enteredText);

    nameInputRef.current.value = '';
    textInputRef.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>Leave a review:</p>
      <input type="text" placeholder="your name..." ref={nameInputRef} />
      <textarea
        rows="6"
        placeholder="your review..."
        ref={textInputRef}
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default NewComment;
