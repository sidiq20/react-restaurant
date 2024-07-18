// i did not delete this cause some people might need this so you can add it in the app.js file 
import React from 'react';

function SearchBox({ searchChange }) {
  return (
    <div className="tc">
      <input
        className="pa3 ba b--#dfd1c1 bg-#dfd1c1"
        type="search"
        placeholder=""
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
