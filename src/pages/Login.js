import { Link, NavLink } from "react-router-dom"
import { fetchHome, fetchLogin, logOut, getLogin } from "../actions/actions"
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
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
        if(props.match.url === '/login'){
            document.getElementById('loginSlider').classList.add("slideBottom")
            document.getElementById('regSlider').classList.add("sliderNotFocused")
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        loginAcc({ username: user, password: pass })
        // if(props.currentuser !== ''){
        // }
        if (user && pass !== '') {

            props.fetchLogin({ username: user, password: pass })
            props.history.push(`/home`)
        }
    }

 



    return (
        <div className="formCon">
            <div className="welheadercon">
                <h1 id="accountheader">Login</h1>
                <p id="headercaption">Login to existing account</p>

            </div>
            <div className="linkSliderCon">
                <NavLink to="/login" id="loginSlider" >Login</NavLink>
                <NavLink to="/register" id="regSlider">Register</NavLink>
            </div>
            <div className="weltxtcon">
                <div className="formHeaderCon">
                    <h1 id="formHeader">Login</h1>
                </div>
                <form className="welcomelinks" autoComplete="off">


                    <input type='text' placeholder="Username" onChange={handleInput} id="username"/>
                  
                    <input type='password' placeholder="Password" onChange={handleInput} id="password" />
                    <button type="submit" className="formSubmit" onClick={handleSubmit} >Login</button>
                    <br />
                    <br />
                    
                    <nav className="linkotherpage">
                        <div className="linkPageFooter">
                            <p >Don't have an account? <Link to="register" id="reglink">Create Account</Link></p>
                        </div>
                    </nav>

                </form>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, { fetchLogin, fetchHome, logOut, getLogin })(Login)