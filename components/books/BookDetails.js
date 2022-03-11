const BookDetails = (props) => {
  const { picture, title } = props;
  return (
    <div>
      <img src={props.picture} alt={props.title} />
      <h1>{props.title}</h1>
    </div>
  );
};

export default BookDetails;
