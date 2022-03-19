import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { getProfile, followAccount, fetchHome} from "../actions/actions"
import { useEffect, useState } from "react"
import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar"
const mapStateToProps = (state) =>({
    currentuser: state.currentuser,
    my_posts: state.my_posts,
    all_posts: state.all_posts,
    users: state.users,
    following: state.following,
    followers: state.followers,
    isLoading: state.isLoading,
    userProf: state.userProf
})

const UserProfile = (props) =>{
    let userprof = props.match.params.user
    console.log(props)

    const [followCheck, setFollowCheck] = useState(false)

    useEffect(() =>{
        // props.fetchHome(props.currentuser)
        props.getProfile(props.match.params.user)
    },[])

    const followUser = (e) =>{
        e.preventDefault()
        props.followAccount(userprof)
    }

  console.log(props)
    return(
        <div className="userProf">
            <SideBar/>
            <NavBar />
            

        <h1>{userprof}'s Profile</h1>
        <h3>Following: {props.users.map(user => user.username === userprof ? user.following.length : '')}</h3>
        <h3>Followers: {props.users.map(user => user.username === userprof ? user.followers.length : '')} </h3>
        {/* {props.following.map(users => users !== userprof ? <button onClick={followUser}>Follow</button> : <button>Unfollow</button>)} */}

     {userprof !== props.currentuser && props.following.map(users => users !== userprof) ? <button onClick={followUser}>Follow</button> : userprof !== props.currentuser ? <button >Unfollow</button> : ''} 


        {props.all_posts.map(posts => {
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

export default connect(mapStateToProps, {getProfile, followAccount, fetchHome})(UserProfile)