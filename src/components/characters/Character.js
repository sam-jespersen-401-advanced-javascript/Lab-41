import React from 'react';
import PropTypes from 'prop-types';

export const Character = ({ name, affiliation, photoUrl }) => {

  return (
    <figure>
      <figcaption>{name}</figcaption>
      <img src={photoUrl} alt={name} />
      <figcaption>{affiliation}</figcaption>
    </figure>
  );

};



Character.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string,
  photoUrl: PropTypes.string
};

