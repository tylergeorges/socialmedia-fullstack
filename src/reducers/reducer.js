import { FETCH_SM_START, FETCH_SM_FAIL, FETCH_SM_SUCCESS, FETCH_SM_LOGIN, FETCH_SM_REGISTER, FETCH_SM_HOME } from "../actions/actions"
const initialState = ({
    currentuser: null,
    isLoading: false,
    error: '',
    users: []
})

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_SM_START:
        return{
            ...state, isLoading:true, currentuser: state.currentuser, error: '', currentuser: state.currentuser, users: state.users
        }
        case FETCH_SM_FAIL:
        return{
            ...state, isLoading:false, currentuser: state.currentuser, error: action.payload, users: state.users, currentuser: state.currentuser
        }
        case FETCH_SM_SUCCESS:
            // console.log(action.payload)
        return{
            ...state, isLoading:false, currentuser: state.currentuser, error: '', users: state.users
        }
        case FETCH_SM_LOGIN:
            console.log(action.payload.data.username.username)
        return{
            ...state, isLoading:false, currentuser: action.payload.data.username.username, error: '', users: state.users
        }
        case FETCH_SM_REGISTER:
            // console.log(action.payload)
        return{
            ...state, isLoading:false, users: [...state.users, action.payload], error: '',currentuser: state.currentuser
        }
        case FETCH_SM_HOME:
        //    action.payload.data.currentuser = state.currentuser 
        //    console.log(action.payload)
            return{
                ...state, isLoading: false, users: state.users, error: '', currentuser:action.payload
            }
        default: return state
    }
}