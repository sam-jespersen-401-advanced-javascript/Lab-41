import { fetchCharacters, getCharById } from '../services/airbender-api';

export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
export const LOAD_CHARACTERS_LOADING = 'LOAD_CHARACTERS_LOADING';
export const LOAD_CHARACTERS_DONE = 'LOAD_CHARACTERS_DONE';
export const LOAD_CHARACTER_DETAIL = 'LOAD_CHARACTER_DETAIL';
export const LOAD_CHARACTER_DETAIL_LOADING = 'LOAD_CHARACTER_DETAIL_LOADING';
export const LOAD_CHARACTER_DETAIL_DONE = 'LOAD_CHARACTER_DETAIL_DONE';

export const loadCharactersPromise = () => ({
  type: LOAD_CHARACTERS,
  pendingType: LOAD_CHARACTERS_LOADING,
  fulfilledType: LOAD_CHARACTERS_DONE,
  payload: fetchCharacters()
});

export const loadCharacterDetailPromise = id => ({
  type: LOAD_CHARACTER_DETAIL,
  pendingType: LOAD_CHARACTER_DETAIL_LOADING,
  fulfilledType: LOAD_CHARACTER_DETAIL_DONE,
  payload: getCharById(id)
});
