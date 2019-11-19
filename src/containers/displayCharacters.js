import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Characters } from '../components/characters/Characters';
import { getCharacters } from '../selectors/characterSelectors';
import { loadCharacters } from '../actions/characterActions';

function DisplayCharacters({ characters, fetchCharacters }) {

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Characters characters={characters} />
  );

}

const mapStateToProps = state => ({
  characters: getCharacters(state)
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
  fetchCharacters: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayCharacters);
