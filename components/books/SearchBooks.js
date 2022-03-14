import { useRef } from 'react';
import classes from './SearchBooks.module.css';

const SearchBooks = (props) => {
  const genreInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const selectedGenre = genreInputRef.current.value;
    console.log(selectedGenre);
    props.onFilter(selectedGenre);
  };

  return (
    <form className={classes.form} onChange={submitHandler}>
      <label htmlFor="genre">Genre</label>
      <select id="genre" ref={genreInputRef}>
        <option value="drama">Drama</option>
        <option value="romance">Romance</option>
        <option value="poetry">Poetry</option>
      </select>
    </form>
  );
};

export default SearchBooks;
