import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCharacterDetailPromise } from '../actions/characterActions';
import { getChar, getLoading } from '../selectors/characterSelectors';
import PropTypes from 'prop-types';


const CharacterDetail = ({ match, getCharacterById, character, loading }) => {

  useEffect(() => {
    getCharacterById(match.params.id);
  }, []);


  if(loading) return <h1>Loading...</h1>;

  return (
    <figure>
      <img src={character.photoUrl} />
      <figcaption>Name: {character.name}</figcaption>
      <figcaption>Affiliation: {character.affiliation}</figcaption>
      <figcaption>Hair: {character.hair}</figcaption>
      <figcaption>Weapon: {character.weapon}</figcaption>
      <figcaption>Position: {character.position}</figcaption>
    </figure>
  );
};

const mapStateToProps = state => ({
  character: getChar(state),
  loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  getCharacterById(id) {
    dispatch(loadCharacterDetailPromise(id));
  }
});

CharacterDetail.propTypes = {
  match: PropTypes.object.isRequired,
  getCharacterById: PropTypes.func.isRequired,
  character: PropTypes.shape({
    name: PropTypes.string,
    affiliation: PropTypes.string,
    photoUrl: PropTypes.string,
    weapon: PropTypes.string,
    hair: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
  loading: PropTypes.string
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetail);
