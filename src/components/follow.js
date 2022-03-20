import { connect } from "react-redux"
import { followAccount } from "../actions/actions"

const mapStateToProps = (state) =>({
    currentuser: state.currentuser,
    my_posts: state.my_posts,
    all_posts: state.all_posts,
    users: state.users,
    following: state.following,
    followers: state.followers,
    isLoading: state.isLoading,
})

const Follow = (props) =>{
    let userprof = props.userprof
    const followUser = (e) =>{
        e.preventDefault()
        props.followAccount(userprof)

    }
    return(
        <div>
            <button onClick={followUser} className="followbtn" id="followbtn">Follow</button>
        </div>
    )
}

export default connect(mapStateToProps, { followAccount })(Follow)