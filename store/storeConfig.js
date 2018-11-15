import {createStore, combineReducers} from 'redux';
import rootReducer from './reducers/rootReducer';


const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;