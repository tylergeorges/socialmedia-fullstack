const axios = require('axios')

export const FETCH_SM_REGISTER = "FETCH_SM_REGISTER"
export const FETCH_SM_LOGIN = "FETCH_SM_LOGIN"


export const CREATE_POST = "CREATE_POST"
export const FETCH_SM_START = "FETCH_SM_START"
export const FETCH_SM_SUCCESS = "FETCH_SM_SUCCESS"
export const FETCH_SM_FAIL = "FETCH_SM_FAIL"
export const FETCH_SM_HOME = "FETCH_SM_HOME"

export const fetchSm = () => (dispatch) =>{
    dispatch({type: FETCH_SM_START})

    axios 
    .get('http://localhost:2020')
    .then(data =>{
        dispatch({type: FETCH_SM_SUCCESS, payload: data})
        console.log(data)
    })
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}

export const fetchRegister = (acc) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    console.log(acc)

    axios 
    .post('http://localhost:2020/register', acc)
    .then(data =>{
        dispatch({type: FETCH_SM_REGISTER, payload: data})
    //    data.map(dd => console.log(dd))
    })
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}

export const fetchLogin = (acc) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    axios 
    .post('http://localhost:2020/login', acc)
    .then(data =>{
        dispatch({type: FETCH_SM_LOGIN, payload: data})
        console.log(data)
    })
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}

export const fetchHome = (user) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    axios 
    .get('http://localhost:2020/home')
    .then(data =>{
        dispatch({type: FETCH_SM_HOME, payload: data})
        // .data.logged_in
       console.log(data.data)
    })
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
export const makePost = (post) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    console.log(post)
    axios 
    .post('http://localhost:2020/home', post)
    .then(data =>{dispatch({type: CREATE_POST, payload: data})})
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
