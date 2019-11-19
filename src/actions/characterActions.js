import { fetchCharacters } from '../services/airbender-api';

export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
export const loadCharacters = () => dispatch => (
  fetchCharacters()
    .then(res => {
      dispatch({
        type: LOAD_CHARACTERS,
        payload: res
      });
    })

);


