import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; //ES6 version of above line, [city, city, city] NOT [city, [city]]
  }
  return state;
}
