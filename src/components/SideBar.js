import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { fetchHome, logOut } from "../actions/actions"

const mapStateToProps = (state) => ({
    currentuser: state.currentuser,
    isLoading: state.isLoading
})

const SideBar = (props) => {

    const history = useHistory()

    const logoutAcc = (e) => {
        e.preventDefault()

        if(props.isLoading === false){

            history.push('/login')
        }
        props.logOut()
    }

    useEffect(() =>{
        // props.fetchHome(props.currentuser)
    },[])

    console.log(props)
    return (
        <div className="sidebar">
        <div className="toProfile">
        <Link to={`/${props.currentuser}`} id="profile">
            <h3 id="displayname">{props.currentuser}</h3>
            
            <p id="displayhandle">{`@${props.currentuser}`}</p>
            </Link>
        </div>

            <div className="sidebarbtns">

                <li>
                    <Link to="/home" id="home"><h3>Home</h3></Link>
                </li>

                <li>
                    <Link to={`/${props.currentuser}`} id="profile"><h3>Profile</h3></Link>
                </li>

                <li>
                    <Link to="/login" id="logout" onClick={logoutAcc}><h3>Logout</h3></Link>
                </li>
            </div>
            
        </div>
    )
}

export default connect(mapStateToProps, { logOut , fetchHome})(SideBar)