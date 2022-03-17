import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { logOut } from "../actions/actions"

const mapStateToProps = (state) => ({
    currentuser: state.currentuser
})

const SideBar = (props) => {

  const history = useHistory()

    const logoutAcc = (e) =>{
        e.preventDefault()
        history.push('/login')
        props.logOut()
    }

console.log(props)

    return(
        <div className="sidebar">
            <ion-icon name="enter-outline"></ion-icon>
            <div className="sidebarbtns">
            <Link to="/home" id="home">Home</Link>
            <Link to={`/${props.currentuser}`} id="profile">Profile</Link>
            <Link to="/login" id="logout" onClick={logoutAcc}>Logout</Link>
            </div>
        </div>
    )
}

export default connect (mapStateToProps, {logOut})(SideBar)