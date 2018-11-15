import {combineReducers} from 'redux';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
    chatRooms:chatReducer
});

export default rootReducer;