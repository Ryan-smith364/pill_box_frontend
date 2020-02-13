import { ON_SEARCH, SET_PILLS, LOGIN, LOGOUT ,ADD_PILL_LIST,
    ADD_PILL_TO_LIST, DELETE_PILL_LIST} from './types'

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
      .then(user =>  {
         if('error' in user){
            alert("Username or Password is Incorrect")
         }
         else{
            dispatch(loginUser(user))  
         }
      })
      .catch(err => console.warn(err))
   }
}

function postPillList(pill_list, time){
 
   return(dispatch ) => {

      const obj = {
         method: 'POST',
         headers:{ 
            'content-type': 'application/json',
            Accept: 'application/json'
      },
      body: JSON.stringify({pill_list, time})
      }

      fetch('http://localhost:3000/pill_lists', obj)
      .then(resp => resp.json())
      .then(user => {dispatch(addPillList(user))}) 
      .catch(err => console.warn(err))

   }
}

function nextDay(pill_list){
   return () => {
   
      const date = new Date(parseInt(pill_list.time))
      date.setDate(date.getDate() + 1)
      const num = date.getTime()
     
      const milli = num.toString()

      const obj = {
         method: 'PATCH',
         headers:{ 
            'content-type': 'application/json',
            'Accept': 'application/json'
         },body: JSON.stringify({ pill_list, date: milli})
      }
      
      fetch(`http://localhost:3000/pill_lists/${pill_list.id}`, obj) 
      .then(resp => resp.json()) 
      .catch(err => console.warn(err))
   }
}

function deletePillList(list){
   
   return (dispatch) => {
      let id = list.id
      
      const obj = {
         method: 'DELETE',
         headers:{ 
            'content-type': 'application/json',
            'Accept': 'application/json'
         }
      }
      
      
      fetch(`http://localhost:3000/pill_lists/${id}`, obj) 
      .then(resp => resp.json())
      .then( json => {dispatch(deletePillListLive(list))})
      .catch(err => console.warn(err))
   }
}


function addPill(listId, pill){
   return(dispatch ) => {
      console.log(pill)
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

function deletePill(userId, pillId){
   
   // return (dispatch) => {
  
      
   //    const obj = {
   //       method: 'DELETE',
   //       headers:{ 
   //          'content-type': 'application/json',
   //          'Accept': 'application/json'
   //       },body: JSON.stringify({userId, pillId})
   //    }
      
      
   //    fetch(`http://localhost:3000/pill_lists_join/${id}`, obj) 
   //    .then(resp => resp.json())
   //    .then(console.log('deleted'))
   //    // .then( json => {dispatch(deletePillLive(list))})
   //    .catch(err => console.warn(err))
   // }
}

function editUser(userObj, userId){

   console.log(userObj)
return (dispatch) => {
  
      const obj = {
         method: 'PATCH',
         headers:{ 
            'content-type': 'application/json',
            'Accept': 'application/json'
         },body: JSON.stringify({userObj})
      }
      
      fetch(`http://localhost:3000/users/${userId}`, obj) 
      .then(resp => resp.json())
      .then(editedUser => {dispatch(loginUser(editedUser))}) 
      // .then( json => {dispatch(deletePillLive(list))})
      .catch(err => console.warn(err))
   }
}

function onSearch(searchText){
   console.log('hits')
   return(dispatch ) => {
      const obj = {
         method: 'POST',
         headers:{ 
            'content-type': 'application/json',
            Accept: 'application/json'
         },
         body: JSON.stringify({searchText})
      }
      
      fetch('http://localhost:3000/pills/search?limit=100', obj)
      .then(resp => resp.json())
      .then(pills => {
         console.log(pills)
         if(pills.length === 0){
            alert(`No Pills Found With The Name '${searchText}'`)
         }
         else{
            {dispatch(searchPills(pills))}
         }})
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

function searchPills(searchText){
   return {type: ON_SEARCH, payload: searchText}
 }

 function addPillToList(join, pill){
   
   return {type: ADD_PILL_TO_LIST, payload: {join, pill}}
 }

 function deletePillListLive(list){
   console.log(list)
  return {type: DELETE_PILL_LIST, payload: list}
}
 
// function loading(){
//    return{type: ON_SEARCH}
// }

 export {onSearch, fetchPills, createUser, findUser, postPillList, addPill,
    userLogout, searchPills, deletePillList, deletePill, editUser, nextDay}