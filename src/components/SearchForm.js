import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const inputRef = useRef('');
  const { setSearchTerm } = useGlobalContext();

  const inputChangeHandler = () => {
    setSearchTerm(inputRef.current.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={onSubmitHandler}>
        <div className='form-control'>
          <label htmlFor="name">Search your cocktail</label>
          <input type='text' id='name' ref={inputRef} onChange={inputChangeHandler} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
