import { connect } from "react-redux"
import { followAccount, unfollowAcc } from "../actions/actions"
const mapStateToProps = (state) =>({
    currentuser: state.currentuser,
    my_posts: state.my_posts,
    all_posts: state.all_posts,
    users: state.users,
    following: state.following,
    followers: state.followers,
    isLoading: state.isLoading,
})

const Unfollow = (props) =>{
    let userprof = props.userprof
    const mouseEnter = (e) =>{
        e.preventDefault()
        document.getElementById('unfollowbtn').textContent = "Unfollow"
    }
    const mouseExit = (e) =>{
        e.preventDefault()
        document.getElementById('unfollowbtn').textContent = "Following"
    }
    const unfollowUser = (e) =>{
        e.preventDefault()
        props.unfollowAcc(userprof)
    }

    return(
        <div>
            <button onMouseEnter={mouseEnter}onMouseLeave={mouseExit} id="unfollowbtn" className="unfollowbtn" onClick={unfollowUser}>Following</button>
        </div>
    )
}

export default connect(mapStateToProps, { unfollowAcc })(Unfollow)