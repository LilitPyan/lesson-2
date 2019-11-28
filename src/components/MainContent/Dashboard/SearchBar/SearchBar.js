import React from 'react';
import css from './SearchBar.module.css'

const SearchBar = ({videos, handleChange}) => {
  return (
      <div className={css.search_item}>
        <form >
          <input placeholder='Search video' type='text'/>
        </form>
      </div>
    )
};

export default SearchBar;
