import React, { useRef, useState } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  const [movietitle , setTitle] = useState('');
  const [movieopeningText , setOpeningText] = useState('');
  const [moviereleaseDate , setReleaseDate] = useState('');

  const titleChangeHandler = (e) => {setTitle(e.target.value)}
  const textChangeHandler = (e) => {setOpeningText(e.target.value)}
  const dateChangeHandler = (e) => {setReleaseDate(e.target.value)}

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: movietitle,
      openingText: movieopeningText,
      releaseDate: moviereleaseDate,
    };

    props.onAddMovie(movie);
    setTitle('')
    setOpeningText('')
    setReleaseDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input value={movietitle} type='text' id='title' onChange={titleChangeHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea value={movieopeningText} rows='5' id='opening-text' onChange={textChangeHandler}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input value={moviereleaseDate} type='text' id='date' onChange={dateChangeHandler} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
