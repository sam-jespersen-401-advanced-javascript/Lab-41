import { fetchCharacters } from '../services/airbender-api';

export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
export const LOAD_CHARACTERS_LOADING = 'LOAD_CHARACTERS_LOADING';
export const LOAD_CHARACTERS_DONE = 'LOAD_CHARACTERS_DONE';
export const loadCharacters = () => dispatch => {
  dispatch({
    type: LOAD_CHARACTERS_LOADING
  });
  fetchCharacters()
    .then(res => {
      dispatch({
        type: LOAD_CHARACTERS,
        payload: res
      });
    });

  dispatch({
    type: LOAD_CHARACTERS_DONE
  });
};


