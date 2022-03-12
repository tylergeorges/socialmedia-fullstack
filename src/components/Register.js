import { useState } from "react"
import { connect } from "react-redux"
import { fetchRegister } from "../actions/actions"
import { Link } from "react-router-dom"
const mapStateToProps = (state) => ({
    users: state.users
})
const Register = (props) =>{

    const [account] = useState({
        username: '',
        password: ''
    })
    const [pass, setPass] = useState('')
    const [user, setUser] = useState('')
    
    const [acc, setNewAcc] = useState(account)

    const handleUser = (e) =>{
        e.preventDefault()

        // if(e.target.id === 'username'){
        //     setUser(e.target.value)
        // }else{
        //     setPass(e.target.value)
        // }

        // setUser({[e.target.name]: [e.target.value]})
        setUser(e.target.name)

    }

   const handlePass = (e) =>{
        e.preventDefault()
        // setPass({[e.target.name]: [e.target.value]})
        setPass( e.target.value)

    }


    const handleSubmit = (e) =>{    
        e.preventDefault()
        setNewAcc({username: user, password: pass})
        // setNewAcc({username: user, password: pass})
        // console.log(acc)
        props.fetchRegister({username: user, password: pass})
    }
    console.log(props)
    return(
        <div>
            <h1>Register</h1>
        <form>
            <input type='text' placeholder="username" name="username"onChange={handleUser} id="username"/>
            <input type='text' placeholder="password" name="password"onChange={handlePass} id="password"/>
            <button type="submit" onClick={handleSubmit}>Register</button>

        </form>
        <Link to="login">Login</Link>
        </div>
    )
}

export default connect(mapStateToProps, {fetchRegister})(Register)