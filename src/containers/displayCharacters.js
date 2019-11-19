import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Characters } from '../components/characters/Characters';
import { getCharacters, getCharactersLoading } from '../selectors/characterSelectors';
import { loadCharacters } from '../actions/characterActions';

function DisplayCharacters({ characters, fetchCharacters, loading }) {

  useEffect(() => {
    fetchCharacters();
  }, []);

  if(loading) return <h1>Loading...</h1>;


  return (
    <Characters characters={characters} />
  );

}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  charactersLoading: getCharactersLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters() {
    dispatch(loadCharacters());
  }
});


DisplayCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string,
    photoUrl: PropTypes.string,
    _id: PropTypes.string.isRequired
  })).isRequired,
  fetchCharacters: PropTypes.func.isRequired,
  loading: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayCharacters);
