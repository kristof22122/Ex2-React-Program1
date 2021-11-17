import React, { useState, useEffect, useCallback } from 'react';
import AppCSS from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pictures } from './components/Pictures/Pictures';
import { debounce } from 'lodash';

import { request } from './api';

function App() {
  const [ pictures, setPictures ] = useState([]);
  const [ query, setQuery ] = useState(null);
  const [ page, setPage ] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const applyQuery = useCallback(
    debounce(setQuery, 500),
    []
  );

  const searchPicture = (event) => {
    const {
      value,
    } = event.target;

    applyQuery(value);
    setPage(1);
  };

  const handleClick = () => {
    setPage(page + 1);
    console.log(page);
  }; 

  useEffect(() => {
    if (query === null) {
      setQuery('');
    };

    request(query, page).then(picture => {
      if (picture) {
        (page === 1) ? setPictures(picture.hits) : setPictures(pictures.concat(picture.hits));
      };
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

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
