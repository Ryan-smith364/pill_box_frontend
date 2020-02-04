import { combineReducers } from "redux"
import {SET_PILLS} from './actions/types'


const pillReducer = (state = [], action) => {
   switch (action.type) {
     case SET_PILLS:
        return action.payload
     default:
       return state;
   }
 };

const rootReducer = combineReducers({
   pills: pillReducer
})

export default rootReducer
