import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { fetchHome, logOut } from "../actions/actions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons"
const mapStateToProps = (state) => ({
    currentuser: state.currentuser,
    isLoading: state.isLoading,
    following: state.following
})

const SideBar = (props) => {

    const history = useHistory()

    const logoutAcc = (e) => {
        e.preventDefault()

        if (props.isLoading === false) {
            history.push('/login')
        }
        props.logOut()
    }

    useEffect(() => {
        props.fetchHome()
    }, [])

    return (
        <div className="sidebar">
            <div className="innersidebar">
                <div className="sidebarbtns">

                    <div className="toProfile">
                        <Link to={`/${props.currentuser}`} id="profile">
                            <h3 id="displayname">{props.currentuser}</h3>
                            <p id="displayhandle">{`@${props.currentuser}`}</p>
                        </Link>
                    </div>

                    <li>
                        <Link to="/home" ><h3 id="home">Home</h3></Link>
                    </li>

                    <li>
                        <Link to={`/${props.currentuser}`} ><h3 id="profile">Profile</h3></Link>
                    </li>

                    <li>
                        <Link to="notifications"><h3 id="notifications">Notifications</h3></Link>
                    </li>

                    <li>
                        <Link to="/login" onClick={logoutAcc}><h3 id="logout">Logout</h3></Link>
                    </li>
                    <div className="followinglist">
                        <h3>Following</h3>
                        {props.following.map(users => {
                            return (
                                <li>{users}</li>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default connect(mapStateToProps, { logOut, fetchHome })(SideBar)