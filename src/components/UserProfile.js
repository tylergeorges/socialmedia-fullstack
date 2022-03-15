import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { getProfile } from "../actions/actions"
import { useEffect } from "react"
import SideBar from "./SideBar"
const mapStateToProps = (state) =>({
    posts: state.posts,
    users: state.users
})

const UserProfile = (props) =>{

    let userprof = props.match.params.user

    useEffect(() =>{
    props.getProfile(userprof)

    },[])

    const followUser = (e) =>{
        e.preventDefault()
    }

    return(
        <div >
            <SideBar/>
        <h1>{userprof}'s Profile</h1>
        <button >Follow</button>
        {props.posts.map(posts => {
                if(posts.author === userprof){

            return(
                <div className="postCon">
                    <div className="post">
                    <h2>{posts.author}</h2>
                    <p>{posts.text_content}</p>
                    <p>{posts.date}</p>
                    </div>
                </div>
            )
        }

        })}
        <Link to="/home">Home</Link>
        </div>
    )
}

export default connect(mapStateToProps, {getProfile})(UserProfile)