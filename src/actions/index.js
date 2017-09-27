import _ from 'lodash';
import { FETCH_IMAGES } from './types';
import axios from 'axios';

//export function fetchImages() {
//  return {
//       type: FETCH_IMAGES,
  //      payload: [
//        'http://lorempixel.com/400/200/',
 //           'http://lorempixel.com/400/200/',
  //          'http://lorempixel.com/400/200/',
   //     ]
  //  }
//}

export function fetchImages() {
    const request = axios.get('http://jsonplacholder.typicode.com/photos?all/1');

    return dispatch => {
        request.then(response => {
        dispatch({
            type: FETCH_IMAGES,
            payload: _.map(response.data, 'thumbnailUrl')
        });
    });
};
}