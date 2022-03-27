import { Link, NavLink } from "react-router-dom"
import Register from "./Register"

const Welcome = (props) => {
    return (
        <div className="welcomePage">
    
            <div className="welheadercon">
                <h1 id="accountheader">Welcome</h1>
                <p id="headercaption">Login or Create a Account</p>
            </div>

            <div className="weltxtcon">
                <nav className="welcomelinks">
                    <NavLink to="login" id="tologin">Login
                        <p className="delivWelPageLogin">Delivered</p>
                    </NavLink>
                    <br />
                    <NavLink to="register" id="toregister">Register
                        <p className="delivWelPageRegi">Delivered</p>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Welcome