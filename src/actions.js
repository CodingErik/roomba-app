import {
  ADD_ROOM_DIMENSION,
  ADD_INTIAL_ROOMBA_LOCATION,
  ADD_DIRT_LOCATION,
  ADD_DRIVING_INSTRUCTIONS,
  ADD_SUBMITMESSAGE,
  BACKSPACE_DRIVING_INSTRUCTIONS,
  CLEAR_DRIVING_INSTRUCTIONS,
  POST_RESULTS
} from './constants';

// *** USER INPUT ****
export const addRoomDimension = (data) => ({
  type: ADD_ROOM_DIMENSION,
  payload: data
});
export const addInitialRoombaLocation = (data) => ({
  type: ADD_INTIAL_ROOMBA_LOCATION,
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
