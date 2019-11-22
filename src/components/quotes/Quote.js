import React from 'react';
import PropTypes from 'prop-types';

export const Quote = ({ quote, character, image }) => {

  return (
    <figure>
      <img src={image} />
      <figcaption>{quote} - {character}</figcaption>
    </figure>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
