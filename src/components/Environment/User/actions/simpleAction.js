import { SIMPLE_ACTION } from './types';
import axios from 'axios';

export const simpleAction = () => dispatch => {
    return axios.get( 'https://api.github.com/users/jitinmaher/repos' ).then( data => {
      dispatch({
        type: SIMPLE_ACTION,
        payload: 'result_of_simple_action',
      });
    });
  }
  