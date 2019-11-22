import { FETCH_QUOTE, FETCH_QUOTE_LOADING, FETCH_QUOTE_DONE } from '../actions/simpsonsActions';

const initialState = {
  quote: {
    quote: '',
    character: '',
    image: ''
  },
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTE:
      return { ...state, quote: action.payload };
    case FETCH_QUOTE_LOADING:
      return { ...state, loading: true };
    case FETCH_QUOTE_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
