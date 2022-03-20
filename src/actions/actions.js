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
export const USER_NOTFI = "USER_NOTFI"
export const UNFOLLOW_ACC = "UNFOLLOW_ACC"
export const GET_POST = "GET_POST"
export const REPLY_POST = "REPLY_POST"

export const FETCH_SM_START = "FETCH_SM_START"
export const FETCH_SM_SUCCESS = "FETCH_SM_SUCCESS"
export const FETCH_SM_FAIL = "FETCH_SM_FAIL"
export const FETCH_SM_HOME = "FETCH_SM_HOME"
export const FETCH_LOG_OUT = "FETCH_LOG_OUT"

const instance = axios.create({ 
    baseURL:'http://localhost:2020',   
    timeout: 1000,  
    headers :{ 'token': 'Bearer ' + 'token' } 

})


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

    instance 
    .post('/register', acc, {withCredentials: true})
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
    instance 
    .post('/login', acc, {withCredentials: true})
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
    instance 
    .get('/login',  {withCredentials: true})
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
    instance 
    .get(`/home`, {withCredentials: true})
    .then(data =>{
        dispatch({type: FETCH_SM_HOME, payload: data})
        // console.log(data)
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
    instance 
    .post(`/home`, post, {withCredentials: true})
    .then(data =>{dispatch({type: CREATE_POST, payload: data})})
        .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}

export const searchUser = (user) =>  (dispatch) =>{
    dispatch({type: FETCH_SM_START})
   instance
   .get(`/search/${user}`,{withCredentials: true})
   .then(data => dispatch({type: SEARCH_USER, payload: data}))
    .catch(err =>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)

    })
}


export const getProfile = (user) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})

    instance.get(`/profile/${user}`,{withCredentials: true})
    .then(data =>{dispatch({type: GET_PROFILE, payload: data})})
    .catch(err=>{dispatch({type: FETCH_SM_FAIL, payload: err.message})
    console.log(err.message)
    })
}
export const followAccount = (useracc) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    // console.log(useracc)
    instance.put(`/profile/${useracc}`, {username: useracc}, {withCredentials: true})
    .then(data =>{dispatch({type: FOLLOW_ACCOUNT, payload: data})})
    // .then(data =>console.log(data))
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
export const unfollowAcc = (useracc) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    // console.log(useracc)
    instance.put(`/profile/${useracc}/unfollow`, {username: useracc}, {withCredentials: true})
    .then(data =>{dispatch({type: UNFOLLOW_ACC, payload: data})})
    // .then(data =>console.log(data))
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
export const userNotfi = () => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    // console.log(useracc)
    instance.get(`/notifications`, {withCredentials: true})
    // .then(data =>console.log(data))
    .then(data =>{dispatch({type: USER_NOTFI, payload: data})})
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
export const getPost = (postId) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    console.log(postId)
    instance.get(`/post/${postId}`,  postId, {withCredentials: true})
    .then(data =>{dispatch({type: GET_POST, payload: data})})
    .then(data =>console.log(data))
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
export const postReply = (postId, post) => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    console.log(postId, post)

    instance.post(`/post/${postId}`, post, {withCredentials: true})
    .then(data =>{dispatch({type: REPLY_POST, payload: data})})
    .then(data =>console.log(data))
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
export const logOut = () => (dispatch) =>{
    dispatch({type: FETCH_SM_START})
    instance 
    .post  (`/logout` , { withCredentials: true })
    .then(data =>{dispatch({type: FETCH_LOG_OUT, payload: data})
        console.log(data)})
    .catch(err=>{
        dispatch({type: FETCH_SM_FAIL, payload: err.message})
        console.log(err.message)
    })
}
