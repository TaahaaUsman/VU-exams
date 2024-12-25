import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div
      className="absolute h-28 w-24 top-2 right-4 sm:right-10 z-10 bg-gray-500 rounded-full flex items-center justify-center"
      style={{ fontSize: '70px', color: 'white' }}
    >
      <FontAwesomeIcon icon={faUserLarge} />
    </div>
  );
};

export default App;
