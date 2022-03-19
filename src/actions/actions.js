const axios = require('axios')

export const ADD_ACCOUNT = "ADD_ACCOUNT"
export const FETCH_SM_LOGIN = "FETCH_SM_LOGIN"
export const FETCH_SM_REGISTER = "FETCH_SM_REGISTER"

export const CREATE_POST = "CREATE_POST"
export const FOLLOW_USER = "FOLLOW_USER"
export const SEARCH_USER =  "SEARCH_USER"
export const GET_PROFILE = "GET_PROFILE"
export const FOLLOW_ACCOUNT = "FOLLOW_ACCOUNT"
export const GET_LOGIN = "GET_LOGIN"

export const FETCH_SM_START = "FETCH_SM_START"
export const FETCH_SM_SUCCESS = "FETCH_SM_SUCCESS"
export const FETCH_SM_FAIL = "FETCH_SM_FAIL"
export const FETCH_SM_HOME = "FETCH_SM_HOME"
export const FETCH_LOG_OUT = "FETCH_LOG_OUT"

export const fetchSm = () => (dispatch) =>{
    dispatch({type: FETCH_SM_START})

    axios 
    .get('http://localhost:2020', {withCredentials: true})
    .then(data =>{
        dispatch({type: FETCH_SM_SUCCESS, payload: data})
        console.log(data)
    })
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}

export const addAccount = (acc) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    console.log(acc)
    console.log(acc)

    axios 
    .post('http://localhost:2020/register', acc, {withCredentials: true})
    .then(data =>{
        dispatch({type: ADD_ACCOUNT, payload: data})
    })
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
export const fetchRegister = (acc) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    console.log(acc)
    console.log(acc)

    axios 
    .get('http://localhost:2020/register', {withCredentials: true})
    .then(data =>{
        dispatch({type: FETCH_SM_REGISTER, payload: data})
    })
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}

export const fetchLogin = (acc) =>  (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    axios 
    .post('http://localhost:2020/login', acc, {withCredentials: true})
    // .then(data =>console.log(data.data.user))
    // .then(async data => await console.log (data))
    .then( data =>{dispatch  ({type: FETCH_SM_LOGIN,  payload: data.data.user})})
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
export const getLogin = (acc) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    axios 
    .get('http://localhost:2020/login',  {withCredentials: true})
    // .then(data =>console.log(data.data.user))
    // .then(data =>console.log(data))
    .then(data =>{dispatch ({type: GET_LOGIN, payload: data.data.logged_in})})
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}

export const fetchHome = () => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    axios 
    .get(`http://localhost:2020/home`, {withCredentials: true})
    .then(data =>{
        dispatch({type: FETCH_SM_HOME, payload: data})
        console.log(data)
        // .data.logged_in
    })
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
export const makePost = (post) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    // console.log(post)
    axios 
    .post(`http://localhost:2020/home`, post, {withCredentials: true})
    .then(data =>{dispatch({type: CREATE_POST, payload: data})})
        .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}

export const searchUser = (user) => async (dispatch) =>{
    dispatch({type: FETCH_SM_START})
try{
   const data = await axios.get(`http://localhost:2020/search/${user}`,{withCredentials: true})
   await dispatch({type: SEARCH_USER, payload: data})
console.log(data)
}
    catch(err){
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    }
}
export const getProfile = (user) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    console.log(user)
    axios 
    .get(`http://localhost:2020/profile/${user}`, {withCredentials: true})
    .then(data =>{dispatch({type: GET_PROFILE, payload: data})
        console.log(data)})
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
export const followAccount = (user) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    console.log(user)
    axios 
    .post(`http://localhost:2020/profile/${user}`, user, {withCredentials: true})
    .then(data =>{dispatch({type: FOLLOW_ACCOUNT, payload: data})})
    // .then(data =>console.log(data))
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
export const logOut = () => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    axios 
    .post  (`http://localhost:2020/logout`, { } , { withCredentials: true })
    .then(data =>{dispatch({type: FETCH_LOG_OUT, payload: data})
        console.log(data)})
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
