import Button from '../UI/Button';
import classes from './BookItem.module.css';

const BookItem = (props) => {
  const { id, title, author, picture, format, publishedDate, description } =
    props;

  const formattedDate = new Date(publishedDate).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={classes.book}>
      <h1>{title}</h1>
      <img src={picture} alt={title} />
      <h2>{author}</h2>
      <p className={classes.format}>
        <strong>Format: </strong>
        {format}
      </p>
      <p className={classes.published}>
        <strong>Released on: </strong>
        {formattedDate}
      </p>
      <p className={classes.description}>
        <strong>Description: </strong>
        {description}
      </p>
      <Button className={classes.btn} link={`/books/${id}`}>
        View more
      </Button>
    </div>
  );
};

export default BookItem;
