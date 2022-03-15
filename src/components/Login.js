import { Link } from "react-router-dom"
import { fetchHome, fetchLogin } from "../actions/actions"
import { connect } from "react-redux"
import { useState } from "react"
import { useHistory } from "react-router-dom";
const mapStateToProps = (state) => ({
    users: state.users,
    currentuser: state.currentuser
})
const Login = (props) =>{
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [acc, loginAcc] = useState('')
    const [madeAcc, setMadeAccs] = useState()
    const history = useHistory()

    const handleInput = async(e) =>{
        e.preventDefault()
        
        if(e.target.id === 'username'){
             setUser(e.target.value)
        }
        if(e.target.id === 'password'){
              setPass( e.target.value)
        }
        
    }

    console.log(props)
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        // props.users.map(accounts => setMadeAccs(accounts.data.Account))
        // loginAcc({username: user, password: pass})
        props.fetchLogin({username: user, password: pass})
        history.push('/home')
    }

    return(
        <div>
        <h1>Login</h1>
    <form>
        <input type='text' placeholder="username" onChange={handleInput} id="username"/>
        <input type='text' placeholder="password" onChange={handleInput} id="password"/>
        <button type="submit" onClick={handleSubmit}>Login</button>

    </form>
    <Link to="register">Register</Link>
    </div>
    )
}

export default connect(mapStateToProps, {fetchLogin, fetchHome})(Login)