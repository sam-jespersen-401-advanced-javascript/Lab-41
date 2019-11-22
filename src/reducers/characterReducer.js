import { LOAD_CHARACTER_DETAIL_LOADING, LOAD_CHARACTER_DETAIL_DONE, LOAD_CHARACTERS, LOAD_CHARACTERS_LOADING, LOAD_CHARACTERS_DONE, LOAD_CHARACTER_DETAIL } from '../actions/characterActions';

const initialState = {
  characters: [],
  detailCharacter: {},
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_CHARACTERS:
      return { ...state, characters: action.payload };
    case LOAD_CHARACTER_DETAIL_LOADING:
    case LOAD_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case LOAD_CHARACTER_DETAIL_DONE:
    case LOAD_CHARACTERS_DONE:
      return { ...state, loading: false };
    case LOAD_CHARACTER_DETAIL:
      return { ...state, detailCharacter: action.payload };
    default:
      return state;
  }
}
