import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchHome, makePost, searchUser} from "../actions/actions"
import { useHistory } from "react-router-dom"
import SideBar from "../components/SideBar"
import NavBar from '../components/NavBar'
import Post from "../components/Post"
const mapStateToProps = (state) =>({
    currentuser: state.currentuser,
    my_posts: state.my_posts,
    all_posts: state.all_posts,
    users: state.users,
    following: state.following,
    isLoading: state.isLoading,
    error: state.error
})

const Home = (props) =>{
    let user = props.currentuser
    const history = useHistory()

    useEffect(()=>{
        props.fetchHome(user)
    }, [])


    console.log(props)
  
    return(
        <div className="home">
            <NavBar />
            <h1>{user}'s Home</h1>
            <SideBar />
           
        <div className="pagesBg">
           <Post />
           </div>
            {props.my_posts !== '' ? props.my_posts.map(show => {
               {
                return(
                    <div >
                        <div className="postCon">
                        <div className="post">
                        <Link to={`/${show.author}`}><h2>{show.author}</h2></Link>
                        <p>{show.text_content}</p>
                        <p>{show.date}</p>
                        </div>
                        </div>
                   
                    </div>
                )
           
               }
            }): 'MAKE A POST OR FOLLOW USERS!'}
        </div>
    )

}

export default connect(mapStateToProps, {fetchHome})(Home)