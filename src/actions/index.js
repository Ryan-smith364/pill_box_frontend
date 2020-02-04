import { ON_SEARCH, SET_PILLS} from './types'

function fetchPills(){
 return (dispatch) => {fetch('http://localhost:3000/pills')
   .then(resp => resp.json())
   .then(pills => {dispatch(setPills(pills))})
   }
}

function setPills(pills){
   return {type: SET_PILLS, payload: pills}
}

function onSearch(searchText){
   return {type: ON_SEARCH, payload: searchText}
 }

 export {onSearch, fetchPills}