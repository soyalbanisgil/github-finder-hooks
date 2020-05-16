import React, { useState } from 'react';

const Search = ({ searchUsers, clearUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please fill the form', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          vlaue='Search'
          className='btb btn-dark btn-block'
        />
      </form>
      <button className='btn btn-light btn-block' onClick={clearUsers}>
        Clear
      </button>
    </div>
  );
};

export default Search;
