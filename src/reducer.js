import {
  // *** USER INPUTS ***** 
  ADD_ROOM_DIMENSION,
  ADD_ROOMBA_LOCATION,
  ADD_DIRT_LOCATION,
  ADD_DRIVING_INSTRUCTIONS,
  ADD_SUBMITMESSAGE,
  BACKSPACE_DRIVING_INSTRUCTIONS,
  CLEAR_DRIVING_INSTRUCTIONS,
  POST_RESULTS
} from './constants';

export const initialState = {
  clicked: false,
  submitMsg: '',
  dirtCollected: 0,
  wallsHit: 0,
  distanceTraveled: 0,
  // USER INPUTS 
  roomDimension: [],
  roombaLocation: [],
  dirtLocation: [],
  drivingInstructions: [],
  // OUTPUT 
  results: {}
};

// this is our dispatcher 
export default (state = initialState, action) => {
  switch (action.type) {
    // USER INPUT 
    case ADD_ROOM_DIMENSION:
      return { ...state, roomDimension: action.payload }
    case ADD_ROOMBA_LOCATION:
      return { ...state, roombaLocation: action.payload }
    case ADD_DRIVING_INSTRUCTIONS:
      return { ...state, drivingInstructions: state.drivingInstructions.concat(action.payload), clicked: true }
    case ADD_DIRT_LOCATION:
      return { ...state, dirtLocation: action.payload }
    case BACKSPACE_DRIVING_INSTRUCTIONS:
      return { ...state, drivingInstructions: state.drivingInstructions.slice(0, -1) }
    case CLEAR_DRIVING_INSTRUCTIONS:
      return { ...state, drivingInstructions: [], clicked: false }
    case ADD_SUBMITMESSAGE: return { ...state, submitMsg: action.payload }
    case POST_RESULTS: return { ...state, results: action.payload }
    default: return state;
  }
};
