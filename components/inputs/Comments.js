import classes from './Comments.module.css';
import { useState, useEffect } from 'react';

const Comments = (props) => {
  const { commentId } = props;
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(true);

  useEffect(() => {
    fetch(`/api/${commentId}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
        setIsFetchingComments(false);
      });
  }, [comments]);

  if (isFetchingComments) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.comments}>
      <h2>Other reviews</h2>
      <ul className={classes.list}>
        {comments.map((comment) => (
          <li key={comment._id.toString()}>
            <p>{comment.name}</p>
            <div>
              <q>{comment.text}</q>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
