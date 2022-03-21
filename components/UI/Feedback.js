import classes from './Feedback.module.css';

const Feedback = (props) => {
  const { title, message, status } = props;

  let activeClasses;

  if (status === 'pending') activeClasses = classes.pending;
  if (status === 'success') activeClasses = classes.success;
  if (status === 'error') activeClasses = classes.error;

  return (
    <div className={`${classes.feedback} ${activeClasses}`}>
      <p>{title}</p>
      <p>{message}</p>
    </div>
  );
};

export default Feedback;
