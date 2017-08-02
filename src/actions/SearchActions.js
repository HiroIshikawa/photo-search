import * as types from '../constants/SearchActionTypes';

function photoSearch(tag, callback) {
  fetch(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}&format=json&nojsoncallback=1`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data);
  }).catch(function(err) {
    console.log('Error ', err);
  });
}

export function searchPhotoAction(tag = 'dog') {
  return (dispatch) => {
    dispatch({
      type: types.SEARCHING,
    });
  
    photoSearch(tag, (data) => {
      dispatch({
        type: types.SEARCH_DONE,
        photos: data.items,
        tag,
      });
    });
  };
}
