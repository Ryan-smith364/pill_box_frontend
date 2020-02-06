import { combineReducers } from "redux"
import {SET_PILLS, LOGIN, ON_SEARCH} from './actions/types'
// import { useStore } from "react-redux";


const pillReducer = (state = [], action) => {
   switch (action.type) {
     case SET_PILLS:
        return action.payload
     default:
       return state;
   }
 };

 const filter = (state = pillReducer(), action)  => {
   switch (action.type) {
   case ON_SEARCH:
         return state.filter(pill => pill.incldes(action))
     default:
       return state;
   }
 }

const userReducer = (state = null, action) => {
   switch (action.type) {
      case LOGIN:
         return action.payload
   default:
      return state;
   }
}


const rootReducer = combineReducers({
   pills: pillReducer,
   currentUser: userReducer
})

export default rootReducer
