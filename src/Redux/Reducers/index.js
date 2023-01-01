import { combineReducers } from "redux";
import  { changeDateTitleAmount ,addobj } from './reducers'

const reducers =combineReducers({
    obj : changeDateTitleAmount,
    
});

export default reducers;