import { combineReducers } from "redux"
import {SET_PILLS, LOGIN, LOGOUT, ADD_PILL_LIST,  ADD_PILL_TO_LIST, ON_SEARCH} from './actions/types'
// import { useStore } from "react-redux";


const pillReducer = (state = [], action) => {
   switch (action.type) {
     case SET_PILLS:
        return action.payload
      case ON_SEARCH:
         return action.payload
      default:
       return state;
   }
 };

const userReducer = (state = null, action) => {
   switch (action.type) {
      case LOGIN:
         return action.payload
      case LOGOUT:
         return action.payload
      case ADD_PILL_LIST:
        const newstate = { ...state, pill_lists: [...state.pill_lists, action.payload] }
         return newstate
      case  ADD_PILL_TO_LIST:
         const targetArr = state.pill_lists.filter(
            list => list.id === action.payload.join.pill_list_id
            )
         const filteredLists = state.pill_lists.filter(
            list => list.id !== action.payload.join.pill_list_id
            )

         const newList = {...targetArr[0], pills: [...targetArr[0].pills, action.payload.pill]}

         const pillState = {...state,
                              pill_lists: [...filteredLists, newList]
                           }                                    
         return pillState
   default:
      return state;
   }
}

// userReducer.pill_list(pills)

const rootReducer = combineReducers({
   pills: pillReducer,
   currentUser: userReducer
})

export default rootReducer
