import { Link } from "react-router-dom"
import Register from "./Register"

const Welcome = (props) =>{

    return(
        <div className="welcomePage">
            <h1 >Welcome</h1>

            <Link to="login" id="loginlink">Login</Link>
            <br />
            <Link to="register" id="reglink">Register</Link>
        </div>
    )
}

export default Welcome