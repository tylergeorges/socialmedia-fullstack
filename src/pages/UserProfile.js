import { Link, Redirect, useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { getProfile, followAccount, fetchHome, unfollowAcc} from "../actions/actions"
import { useEffect, useState } from "react"
import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar"
import Notifictions from "./Notifictions"
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

    //! if follow check is true then we are not following the user
    const [followCheck, setFollowCheck] = useState(false)

    const history = useHistory()
    useEffect(() =>{
        props.getProfile(props.match.params.user)
        props.fetchHome()
    },[])

    const followUser = (e) =>{
        e.preventDefault()
        props.followAccount(userprof)
    }
    const unfollowUser = (e) =>{
        e.preventDefault()
        props.unfollowAcc(userprof)
    }

    const mouseEnter = (e) =>{
        e.preventDefault()
        document.getElementById('unfollowbtn').textContent = "Unfollow"
    }
    const mouseExit = (e) =>{
        e.preventDefault()
        document.getElementById('unfollowbtn').textContent = "Following"
    }

  console.log(props)
  let filArr = props.following.filter(users => users === props.match.params.user)
  console.log(filArr)
    return(
        <div className="userProf">
            <SideBar/>
            <NavBar />
            

        <h1>{userprof}'s Profile</h1>
        <h3>Following: {props.users.map(user => user.username === userprof ? user.following.length : '')}</h3>
        <h3 >Followers: {props.users.map(user => user.username === userprof ? user.followers.length : '')} </h3>
        {/* {props.following.map(users => users !== userprof ? <button onClick={followUser}>Follow</button> : <button>Unfollow</button>)} */}


     {/* //* follow button */}
     {
     props.match.params.user !== props.currentuser && filArr.length ? 
     <button onMouseEnter={mouseEnter}onMouseLeave={mouseExit} id="unfollowbtn" className="unfollowbtn" onClick={unfollowUser}>Following</button>: 
     <button onClick={followUser} className="followbtn">Follow</button> 
      } 

  

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
        </div>
    )
}


export default connect(mapStateToProps, {getProfile, followAccount, fetchHome, unfollowAcc })(UserProfile)