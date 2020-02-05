import { ON_SEARCH, SET_PILLS, LOGIN, SIGN_UP} from './types'

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
      .then(user => {dispatch(loginUser(user))})
      .catch(err => console.warn(err))
   }
}

function addPill(listId, pillId){

   return(dispatch ) => {
      const obj = {
         method: 'POST',
         headers:{ 
            'content-type': 'application/json',
            Accept: 'application/json'
      },
      body: JSON.stringify({pill_list_id: listId, pill_id: pillId})
      }

      fetch('http://localhost:3000/pill_list_joins', obj)
      .then(resp => resp.json())
      .then(join => console.log(join))
      .catch(err => console.warn(err))
   }
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

 export {onSearch, fetchPills, createUser, findUser, postPillList, addPill }