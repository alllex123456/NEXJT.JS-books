import classes from './BookDetails.module.css';

const BookDetails = (props) => {
  const { picture, title, author, description } = props;
  return (
    <div className={classes.book}>
      <img src={picture} alt={title} />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BookDetails;
