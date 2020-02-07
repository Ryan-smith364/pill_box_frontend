import { ON_SEARCH, SET_PILLS, LOGIN, LOGOUT ,ADD_PILL_LIST, ADD_PILL_TO_LIST} from './types'

function fetchPills(){
 return (dispatch) => {fetch('http://localhost:3000/pills')
   .then(resp => resp.json())
   .then(pills => {dispatch(setPills(pills))})
   }
}

function createUser(user){
   console.log(user)
   return (dispatch) => {

      const obj = {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json'
         },
         body: JSON.stringify({user})
       }
       
       fetch('http://localhost:3000/users', obj)
       .then(res => res.json())
       .then(user => {dispatch(loginUser(user))})
       .catch(err => console.warn(err))
   }
}

function findUser(user){
   console.log(user)
   return(dispatch ) => {
      const obj = {
         method: 'POST',
         headers:{ 
            'content-type': 'application/json',
            Accept: 'application/json'
      },
      body: JSON.stringify({username: user.username, password: user.password})
      }

      fetch('http://localhost:3000/users/login', obj)
      .then(resp => resp.json())
      .then(user => {dispatch(loginUser(user))})
      .catch(err => console.warn(err))
   }
}

function postPillList(pill_list){
   return(dispatch ) => {
      const obj = {
         method: 'POST',
         headers:{ 
            'content-type': 'application/json',
            Accept: 'application/json'
      },
      body: JSON.stringify({pill_list})
      }

      fetch('http://localhost:3000/pill_lists', obj)
      .then(resp => resp.json())
      .then(user => {dispatch(addPillList(user))})    //add to current state
      .catch(err => console.warn(err))
   }
}


function addPill(listId, pill){
   console.log(pill)
   return(dispatch ) => {
      const obj = {
         method: 'POST',
         headers:{ 
            'content-type': 'application/json',
            Accept: 'application/json'
         },
         body: JSON.stringify({pill_list_id: listId, pill_id: pill.id})
      }
      
      fetch('http://localhost:3000/pill_list_joins', obj)
      .then(resp => resp.json())
      .then(join => {dispatch(addPillToList(join ,pill))})
      .catch(err => console.warn(err))
   }
}

function addPillList(list){   
   return{ type: ADD_PILL_LIST, payload: list}
}

function userLogout(){
   return{ type: LOGOUT, payload: null }
}

function loginUser(user){
   return{ type: LOGIN, payload: user }
}

function setPills(pills){
   return {type: SET_PILLS, payload: pills}
}

function onSearch(searchText){
   return {type: ON_SEARCH, payload: searchText}
 }

 function addPillToList(join, pill){
    console.log('hit')
   return {type: ADD_PILL_TO_LIST, payload: {join, pill}}
 }

 export {onSearch, fetchPills, createUser, findUser, postPillList, addPill, userLogout }