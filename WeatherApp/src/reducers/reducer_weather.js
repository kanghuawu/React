import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      // Do not use state.push(XX) which mutate state.
      // What we want is return a new verion state, so the following works.
      // return state.concat([action.payload.data]);
      // Here is a better way by taking advantage of ES6 syntax.
      return [action.payload.data, ...state];
  }
  return state;
}
