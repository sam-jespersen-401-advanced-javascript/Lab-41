import { LOAD_CHARACTERS, LOAD_CHARACTERS_LOADING, LOAD_CHARACTERS_DONE } from '../actions/characterActions';

const initialState = {
  characters: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_CHARACTERS:
      return { ...state, characters: action.payload };
    case LOAD_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case LOAD_CHARACTERS_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
