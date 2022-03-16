import { useRef } from 'react';
import { useRouter } from 'next/router';
import classes from './SearchBooks.module.css';

const SearchBooks = (props) => {
  const genreInputRef = useRef();
  const formatInputRef = useRef();
  const router = useRouter();

  const redirHandler = (e) => {
    e.preventDefault();

    const genre = genreInputRef.current.value;
    const format = formatInputRef.current.value;

    router.push(`/books/${genre}/${format}`);
  };

  return (
    <form className={classes.form} onSubmit={redirHandler}>
      <div>
        <label htmlFor="genre">Genre</label>
        <select id="genre" ref={genreInputRef}>
          <option value="drama">Drama</option>
          <option value="romance">Romance</option>
          <option value="poetry">Poetry</option>
        </select>
      </div>
      <div>
        <label htmlFor="format">Format</label>
        <select id="format" ref={formatInputRef}>
          <option value="paperback">Paperback</option>
          <option value="hardback">Hardback</option>
        </select>
      </div>
      <button className={classes.btn}>Filter</button>
    </form>
  );
};

export default SearchBooks;
