import { LOAD_CHARACTERS } from '../actions/characterActions';

const initialState = {
  characters: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_CHARACTERS:
      return { ...state, characters: action.payload };
    default:
      return state;
  }
}
