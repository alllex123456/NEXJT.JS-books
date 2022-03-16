import classes from './BookDetails.module.css';

const BookDetails = (props) => {
  const { picture, title } = props;
  return (
    <div className={classes.book}>
      <img src={props.picture} alt={props.title} />
      <h1>{props.title}</h1>
    </div>
  );
};

export default BookDetails;
