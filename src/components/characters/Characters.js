import React from 'react';
import PropTypes from 'prop-types';
import { Character } from './Character';

export const Characters = ({ characters }) => {

  const charElements = characters.map(char => {
    return (
      <li key={char._id} style={{ maxWidth: '350px' }}>
        <Character name={char.name} _id={char._id} photoUrl={char.photoUrl} />
      </li>
    );
  });

  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {charElements}
    </ul>
  );

};


Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    _id: PropTypes.string.isRequired
  })).isRequired
};
