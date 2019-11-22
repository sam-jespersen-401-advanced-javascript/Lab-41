import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Quote } from '../components/quotes/Quote';
import PropTypes from 'prop-types';
import { getQuote, getCharacter, getImage, getLoading } from '../selectors/simpsonsSelectors';
import { fetchQuoteAction } from '../actions/simpsonsActions';

const SimpsonsQuote = ({ quote, character, image, fetch, loading }) => {

  useEffect(() => {
    fetch();
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <Quote quote={quote} character={character} image={image} />
      <button onClick={fetch}>Get quote</button>
    </>
  );
};

const mapStateToProps = state => ({
  quote: getQuote(state),
  character: getCharacter(state),
  image: getImage(state),
  loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuoteAction());
  }
});

SimpsonsQuote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
