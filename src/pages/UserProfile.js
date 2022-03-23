import { Link, Redirect, useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { getProfile, followAccount, fetchHome, unfollowAcc} from "../actions/actions"
import { useEffect, useState } from "react"
import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar"
import Notifictions from "./Notifictions"
import Follow from "../components/follow"
import Unfollow from "../components/unfollow"
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

    //! if followed set to true
    const [followed, setUserFollowed] = useState(false);
    let filArr = props.following.filter(users => users === props.match.params.user)
 


    const history = useHistory()

    useEffect(() =>{
        props.getProfile(props.match.params.user)
        props.fetchHome()

        if(filArr.length){
            setUserFollowed(followed => !followed)
        }
    },[])


    const handleclick = (e) =>{
        e.preventDefault()
        setUserFollowed(followed => !followed)
    }



//   let filArr = props.following.filter(users => users === props.match.params.user)
 
    return(
        <div className="userProf">
            <SideBar/>
            <NavBar />
            

        <h1>{userprof}'s Profile</h1>
        <h3>Following: {props.users.map(user => user.username === userprof ? user.following.length : '')}</h3>
        <h3 >Followers: {props.users.map(user => user.username === userprof ? user.followers.length : '')} </h3>


       {followed && userprof !== props.currentuser ? <Follow userprof={userprof} onClick={handleclick} /> : <Unfollow userprof={userprof} onClick={handleclick}/>}
       {/* {filArr.length && !followed !== props.currentuser? <Unfollow userprof={userprof} onClick={handleclick}/>: null} */}



  

        {props.all_posts.map(posts => {
            if(posts.author === userprof){
            return(
                <div className="postCon">
                    <div className="post">
                    <Link to={`/${posts.author}/post/${posts._id}`}>
                    <h2>{posts.author}</h2>
                    <p>{posts.text_content}</p>
                    <p>{posts.date}</p>
                    </Link>
                    </div>
                </div>
            )
        }
        })}
        </div>
    )
}


export default connect(mapStateToProps, {getProfile, followAccount, fetchHome, unfollowAcc })(UserProfile)