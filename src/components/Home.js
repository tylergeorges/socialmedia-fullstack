import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchHome } from "../actions/actions"
const mapStateToProps = (state) =>({
    currentuser: state.currentuser
})


const Home = (props) =>{
    
    const [logged] = useState(props.currentuser)

    let user = props.currentuser
    console.log(props)

    useEffect(()=>{
        props.fetchHome()
        
    },[logged])
    // props.fetchHome()
    


    return(
        <div>
            <h1>{user}'s Home</h1>
            <Link to="login">Login</Link>
        </div>
    )
}

export default connect(mapStateToProps, {fetchHome})(Home)