import { Fragment } from 'react';
import classes from './AllBooks.module.css';
import BookItem from './BookItem';

const AllBooks = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          picture={book.picture}
          format={book.format}
          publishedDate={book.publishedDate}
          description={book.description}
        />
      ))}
    </ul>
  );
};

export default AllBooks;
