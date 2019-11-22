import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Character = ({ _id, name, photoUrl }) => {

  return (
    <Link to={`/character/${_id}`}>
      <figure>
        <img src={photoUrl} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </Link>
  );

};



Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  _id: PropTypes.string.isRequired
};

