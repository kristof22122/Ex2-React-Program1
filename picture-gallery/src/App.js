import React, { useState, useEffect, useCallback } from 'react';
import AppCSS from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pictures } from './components/Pictures/Pictures';
import { debounce } from 'lodash';

import { request } from './api';

function App() {
  const [ pictures, setPictures ] = useState([]);
  const [ query, setQuery ] = useState(null);
  const [ appliedQuery, setAppliedQuery ] = useState(null);
  const [ page, setPage ] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const applyQuery = useCallback(
    debounce(setAppliedQuery, 500),
    []
  ); 

  const searchPicture = useCallback((event) => {
    const {
      value,
    } = event.target;

    setQuery(value);
    applyQuery(value);
    setPage(1);
  }, [applyQuery]);

  const handleClick = useCallback(() => {
    setPage(page + 1);
    console.log(page);
  }, [page]); 

  useEffect(() => {
    if (appliedQuery === null) {
      setAppliedQuery('');
    };    

    request(appliedQuery, page).then(picture => {
      try {
        if (page === 1) {
          setPictures(picture.hits);
        } else {
          setPictures(pictures.concat(picture.hits));
        } 
      } catch (error) {
        console.log('Getting pictures error');
        console.log(error.message);
      }      
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appliedQuery, page]);

  return (
    <div className={AppCSS.App}>
      <div
        className={AppCSS.App__wrapper}
      >
        <h1
          className="display-1"
        >
          Picture Gallery
        </h1>
        <div
          className={AppCSS.App__input}
        >
          <input
            className="form-control"
            type="text"
            placeholder="Enter you request"
            value={query || ''}
            onChange={searchPicture}
          />
        </div>
        <div>
          <Pictures 
            pictures={pictures}
          />
        </div>
        <div>
          <button
            className="btn btn-link" 
            type="button"
            onClick={handleClick}
          >
            Add more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
