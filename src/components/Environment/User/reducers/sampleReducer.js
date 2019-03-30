
import { SIMPLE_ACTION } from '../actions/types';
const { Map } = require('immutable');
const initialState = Map({
  data: {
    author: "Jitin",
  }
});

export default (state = initialState, action) => {
    switch ( action.type ) {
      case SIMPLE_ACTION:
        return state.setIn( [ 'data', 'author' ], action.payload );
      default:
        return state
    }
  }