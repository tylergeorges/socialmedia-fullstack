import { FETCH_SM_START, FETCH_SM_FAIL, FETCH_SM_SUCCESS, FETCH_SM_LOGIN, FETCH_SM_REGISTER, FETCH_SM_HOME, CREATE_POST, SEARCH_USER, GET_PROFILE, ADD_ACCOUNT, FETCH_LOG_OUT, FOLLOW_ACCOUNT} from "../actions/actions"
const initialState = ({
    currentuser: '',
    isLoading: false,
    error: '',
    users: [],
    posts: [],
    following: [],
    followers: [],
    usersearched: ''
})

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_SM_START:
        return{
            ...state, isLoading:true, currentuser: state.currentuser, error: '',  users: state.users
        }
        case FETCH_SM_FAIL:
        return{
            ...state, isLoading:false, currentuser: state.currentuser, error: action.payload, users: state.users, 
        }
        case FETCH_SM_SUCCESS:
            // console.log(action.payload)
        return{
            ...state, isLoading:false, currentuser: state.currentuser, error: '', users: state.users
        }
        case FETCH_SM_LOGIN:
            console.log(action.payload)
        return{
            ...state, isLoading:false, currentuser: action.payload.username, following: action.payload.following, followers: action.payload.followers,  error: '', users: state.users
        }
        case ADD_ACCOUNT:
        return{
            ...state, isLoading:false, users: [...state.users.users, action.payload], error: '',currentuser: state.currentuser
        }
        case FETCH_SM_HOME:
        console.log(action.payload)
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser:action.payload.data.logged_in, posts: action.payload.data.userposts, users: action.payload.data.users, following: action.payload.data.following
            }
        case CREATE_POST:

           action.payload.data.posts.author = state.currentuser 
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser:state.currentuser, posts: [action.payload.data.posts, ...state.posts]
            }
        case SEARCH_USER:
            let filArr = action.payload.data.allUsers.map(usernames => usernames.username)
        return{
            ...state, isLoading: false, users: filArr, error: '', currentuser:state.currentuser, posts: state.posts, usersearched: action.payload.data.user
        }
        case GET_PROFILE:
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser:state.currentuser, posts: action.payload.data.posts, usersearched: state.usersearched
            }
        case FETCH_SM_REGISTER:
            return{
                ...state, isLoading: false, users: action.payload.data, error: '', currentuser:state.currentuser, posts: state.posts, usersearched: state.usersearched
            }
        case FETCH_LOG_OUT:
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser: '', posts: state.posts, usersearched: state.usersearched,
            }
        case FOLLOW_ACCOUNT: 
            console.log(action.payload)
        return{
            ...state, isLoading: false, users: state.users, error: '', currentuser:state.currentuser, posts: state.posts, usersearched: state.usersearched, following: [...state.following, action.payload.data.following]
        }
        default: return state
    }
}