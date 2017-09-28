import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POST:
            return { ...state, [action.payload.id]: action.payload };
            
        case FETCH_POSTS:
           const newPosts = _.mapKeys(action.payload, 'id');
           return { ...state,...newPosts };
        case UPDATE_POST:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_POST:
            // action.payload === id of post to delete
           return _.omit(state, action.payload);
        default:
            return state;


    }
}