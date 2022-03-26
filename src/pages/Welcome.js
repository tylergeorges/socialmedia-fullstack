import { Link, NavLink } from "react-router-dom"
import Register from "./Register"

const Welcome = (props) => {
    return (
        <div className="welcomePage">
    
            <div className="welheadercon">
                <h1 id="accountheader">Welcome</h1>
            </div>

            <div className="weltxtcon">
                <nav className="welcomelinks">
                    <NavLink to="login" id="tologin">Login
                        <div className="arrow-down-login" />
                        <p className="delivWelPageLogin">Delivered</p>
                    </NavLink>
                    <br />
                    <NavLink to="register" id="toregister">Register
                        <div className="arrow-down-register" />
                        <p className="delivWelPageRegi">Delivered</p>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Welcome