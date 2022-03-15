import { Link } from "react-router-dom"
const SideBar = () => {
    return(
        <div className="sidebar">
            <ion-icon name="enter-outline"></ion-icon>
            <div className="sidebarbtns">
            <Link to="home" id="home">Home</Link>
            <Link to="login" id="logout">Logout</Link>
            </div>
        </div>
    )
}

export default SideBar