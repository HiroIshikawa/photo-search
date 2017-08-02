import * as types from '../constants/SearchActionTypes';

const initialState = {
  status: 'IDLE',
  photos: [],
};

export default function searchPhotos(state = initialState, action) {
  switch (action.type) {
  case types.SEARCHING:
    return {
      ...state,
      photos: [],
      status: 'PENDING',
    };
  case types.SEARCH_DONE:
    return {
      ...state,
      photos: [...state.photos, ...action.photos],
      status: 'DONE',
      tag: action.tag,
    };
  default:
    return state;
  }
}
