import {combineReducers} from 'redux';
import taskReducer from './Redux/taskReducer';


export default combineReducers(
    {
        task:taskReducer,
    }
)