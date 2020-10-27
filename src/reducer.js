import {
  // *** USER INPUTS ***** 
  ADD_ROOM_DIMENSION,
  ADD_ROOMBA_LOCATION,
  ADD_DIRT_LOCATION,
  ADD_DRIVING_INSTRUCTIONS,
  ADD_SUBMITMESSAGE,
  BACKSPACE_DRIVING_INSTRUCTIONS,
  CLEAR_DRIVING_INSTRUCTIONS,
  SUBMIT_RESULTS,
  POST_RESULTS,
  INCREASE_DISTANCE_TRAVELED,
  INCREASE_WALL_HIT,
  INCREASE_DIRT_COLLECTED,
  INCREASE_X,
  INCREASE_Y,
  DECREASE_X,
  DECREASE_Y,
} from './constants';


export const initialState = {
  submitted: false,
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
  resultsData: []
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
    case SUBMIT_RESULTS: return { ...state, submitted: true }
    case POST_RESULTS: return { ...state, resultsData: action.payload }
    case INCREASE_DISTANCE_TRAVELED: return { ...state, distanceTraveled: state.distanceTraveled + 1 }
    case INCREASE_WALL_HIT: return { ...state, wallsHit: state.wallsHit + 1 }
    case INCREASE_DIRT_COLLECTED: return { ...state, dirtCollected: state.dirtCollected + 1 }
    // location update code 
    case INCREASE_X: return { ...state, roombaLocation: state.roombaLocation.map((item, index) => (index === 0)? item + 1 : item) }
    case INCREASE_Y: return { ...state, roombaLocation: state.roombaLocation.map((item, index) => (index === 1)? item + 1 : item) }
    case DECREASE_X: return { ...state, roombaLocation: state.roombaLocation.map((item, index) => (index === 0)? item - 1 : item) }
    case DECREASE_Y: return { ...state, roombaLocation: state.roombaLocation.map((item, index) => (index === 1)? item - 1 : item) }
    default: return state;
  }
};


