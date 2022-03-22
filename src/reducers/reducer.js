import { FETCH_SM_START, FETCH_SM_FAIL, FETCH_SM_SUCCESS, FETCH_SM_LOGIN, FETCH_SM_REGISTER, FETCH_SM_HOME, CREATE_POST, SEARCH_USER, GET_PROFILE, ADD_ACCOUNT, FETCH_LOG_OUT, FOLLOW_ACCOUNT, GET_LOGIN, USER_NOTFI, UNFOLLOW_ACC, GET_POST, REPLY_POST, DELETE_POST} from "../actions/actions"
const initialState = ({
    currentuser: '',
    isLoading: false,
    error: '',
    users: [],
    my_posts: [],
    all_posts: [],
    following: [],
    followers: [],
    usersearched: '',
    userprof: '',
    notifications: [], 
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
        return{
            ...state, isLoading:false, currentuser: action.payload.username, following: action.payload.following, followers: action.payload.followers,  error: '', users: state.users
        }
        case GET_LOGIN:
            return{
                ...state, isLoading:false, currentuser: action.payload.currentuser, following: action.payload.following, followers: action.payload.followers,  error: '', users: state.users
            }
        case ADD_ACCOUNT:
        return{
            ...state, isLoading:false, users: [...state.users.users, action.payload], error: '',currentuser: state.currentuser
        }
        case FETCH_SM_HOME:
            return{
                ...state, isLoading: false, error: '', currentuser:action.payload.data.logged_in.username, my_posts: action.payload.data.logged_in.my_posts, all_posts:action.payload.data.all_posts, users: action.payload.data.users, following: action.payload.data.logged_in.following
            }
        case CREATE_POST:
    
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser:state.currentuser, all_posts:  action.payload.data.all_posts, my_posts: [...state.my_posts, action.payload.data.my_post]
            }
        case  SEARCH_USER:
            let filArr = action.payload.data.allUsers.map(usernames => usernames.username)
        return {
            ...state, isLoading: false, users: filArr, error: '', currentuser:action.payload.currentuser, all_posts: state.all_posts, my_posts: state.my_posts, usersearched: action.payload.data.user
        }
        case GET_PROFILE:
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser: state.currentuser, posts: state.all_posts, my_posts: state.my_posts, usersearched: state.usersearched, userprof: action.payload.data.userprof
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
        return{
            ...state, isLoading: false, users: state.users, error: '', currentuser:state.currentuser, posts: state.posts, usersearched: state.usersearched, following: [...state.following, action.payload.data.following]
        }
        case USER_NOTFI:
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser:state.currentuser, posts: state.posts, usersearched: state.usersearched, following: state.following, notifications: [action.payload.data.notifications, ...state.notifications]
            }
        case UNFOLLOW_ACC:
            
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser:state.currentuser, posts: state.posts, usersearched: state.usersearched, following:  state.following, followers: state.followers
            }
        case GET_POST:
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser:state.currentuser, posts: state.posts, usersearched: state.usersearched, following:  state.following, followers: state.followers
            }
        case REPLY_POST:
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser:state.currentuser, posts: state.posts, usersearched: state.usersearched, following:  state.following, followers: state.followers  
            }
        case DELETE_POST:
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser:state.currentuser, posts: state.posts, usersearched: state.usersearched, following:  state.following, followers: state.followers  
            }
        default: return state
    }
}