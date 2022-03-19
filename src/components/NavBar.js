import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import Search from "../pages/Search"
import SearchBar from "./SearchBar"



const NavBar = (props) =>{


    return(
        <div className="navbar">
            <SearchBar />
        </div>
    )
}

export default NavBar