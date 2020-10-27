import {
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

// *** USER INPUT ****
export const addRoomDimension = (data) => ({
  type: ADD_ROOM_DIMENSION,
  payload: data
});
export const addRoombaLocation = (data) => ({
  type: ADD_ROOMBA_LOCATION,
  payload: data
});
export const addDirtLocation = (data) => ({
  type: ADD_DIRT_LOCATION,
  payload: data
});
export const addDrivingInstructions = (data) => ({
  type: ADD_DRIVING_INSTRUCTIONS,
  payload: data
});
export const backspaceDrivingInstructions = () => ({
  type: BACKSPACE_DRIVING_INSTRUCTIONS
});
export const clearDrivingInstructions = () => ({
  type: CLEAR_DRIVING_INSTRUCTIONS
});
// *******************

export const addSubmitMessage = (data) => ({
  type: ADD_SUBMITMESSAGE,
  payload: data
});

export const postResults = (results) => ({
  type: POST_RESULTS,
  payload: results
});
export const submitResults = (results) => ({
  type: SUBMIT_RESULTS
});

// distance Traveled
export const increaseDistanceTraveled = () => ({
  type: INCREASE_DISTANCE_TRAVELED,
})


// wallshit 
export const increaseWallhit = () => ({
  type: INCREASE_WALL_HIT,
})

// DIRT COLLECTED 
export const increaseDirtCollected = () => ({
  type: INCREASE_DIRT_COLLECTED,
})


// updating location of roomba 
export const increaseX = () => ({
  type: INCREASE_X,
})
export const increaseY = () => ({
  type: INCREASE_Y,
})
export const decreaseX = () => ({
  type: DECREASE_X,
})
export const decreaseY = () => ({
  type: DECREASE_Y,
})

