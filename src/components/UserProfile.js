import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { getProfile, followAccount} from "../actions/actions"
import { useEffect, useState } from "react"
import SideBar from "./SideBar"
const mapStateToProps = (state) =>({
    posts: state.posts,
    users: state.users,
    following: state.following
})

const UserProfile = (props) =>{

    const [search, setSearch] = useState('')
    const [results, setSearchResults] = useState('')

    let userprof = props.match.params.user

    useEffect(() =>{
    props.getProfile(userprof)

    },[])

    const followUser = (e) =>{
        e.preventDefault()

        props.followAccount(userprof)
    }

    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)
    }

    const submitSearch = (e) =>{
        e.preventDefault()
        // setSearchResults(search)
        // console.log(results)
        if(search !== '' && props.users.map(username => search === username)){

            props.history.push(`/search/${search}`)
        }

    }

    return(
        <div >
            <SideBar/>

            <form>
            <input name="search" type='text' placeholder="Search..." onChange={handleSearch} className="searchBar"/>
            <button type="submit" onClick={submitSearch} style={{ display: 'none' }}/>
            </form>

        <h1>{userprof}'s Profile</h1>
        {props.following.map(users => users !== userprof ? <button onClick={followUser}>Follow</button> : <button>Unfollow</button>)}

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

export default connect(mapStateToProps, {getProfile, followAccount})(UserProfile)