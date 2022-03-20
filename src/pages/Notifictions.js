import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { userNotfi } from "../actions/actions"
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import SideBar from "../components/SideBar"


const mapStateToProps = (state) =>({
    notifications: state.notifications
})

const Notifications = (props) =>{

    useEffect(() =>{
        props.userNotfi()
    },[])
    return(
        <div>
            <NavBar />
            <h1 className="notfiHeader">Notifications</h1>
            <SideBar />
        </div>
    )
}

export default connect(mapStateToProps, {userNotfi})(Notifications)