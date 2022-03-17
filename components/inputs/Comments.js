import classes from './Comments.module.css';

const Comments = (props) => {
  return (
    <div className={classes.comments}>
      <h2>Other reviews</h2>
      <ul className={classes.list}>
        <li>comment</li>
      </ul>
    </div>
  );
};

export default Comments;
