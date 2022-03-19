import { Link } from "react-router-dom"
import Register from "./Register"

const Welcome = (props) =>{

    return(
        <div>
            <h1>Welcome</h1>

            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
        </div>
    )
}

export default Welcome