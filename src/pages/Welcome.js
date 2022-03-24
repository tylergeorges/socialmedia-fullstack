import { Link, NavLink } from "react-router-dom"
import Register from "./Register"

const Welcome = (props) =>{
    return(
        <div className="welcomePage">
        <div className="weltxtcon">

            <div className="formheadercon">
                <h1 id="accountheader">Welcome</h1>
            </div>

            <nav className="welcomelinks">
            
            <NavLink to="login" id="tologin">Login
            <div className="arrow-down-login"/>
            </NavLink>
            <br />
            <NavLink to="register" id="toregister">Register
            <div className="arrow-down-register"/>
            </NavLink>
            </nav>
        </div>
        </div>
    )
}

export default Welcome