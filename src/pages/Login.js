import { Link } from "react-router-dom"
import { fetchHome, fetchLogin, logOut, getLogin } from "../actions/actions"
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
const mapStateToProps = (state) => ({
    users: state.users,
    currentuser: state.currentuser
})

const Login = (props) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [acc, loginAcc] = useState('')
    const [madeAcc, setMadeAccs] = useState()
    const history = useHistory()

    const handleInput = (e) => {
        e.preventDefault()

        if (e.target.id === 'username') {
            setUser(e.target.value)
        }
        if (e.target.id === 'password') {
            setPass(e.target.value)
        }

    }
    useEffect(() => {
        props.getLogin()
    }, [])

    const handleSubmit =  (e) => {
        e.preventDefault()

        loginAcc({ username: user, password: pass })
        // if(props.currentuser !== ''){
            // }
            if(user && pass !== ''){
                
            props.fetchLogin({ username: user, password: pass })
            props.history.push(`/home`)
        }
    }



    return (
        <div className="formCon">
            <div className="formConCenter">
                <div className="formHeaderCon">
                    <h1 id="formHeader">Login</h1>
                </div>

                <form className="formAccInfo">
                    <input type='text' placeholder="username" onChange={handleInput} id="username" />
                    <input type='password' placeholder="password" onChange={handleInput} id="password" />
                    <button type="submit" className="formSubmit" onClick={handleSubmit} >Login</button>
                    <br />
                    <Link to="register" id="reglink">Register</Link>
                    <br />
                </form>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, { fetchLogin, fetchHome, logOut, getLogin })(Login)