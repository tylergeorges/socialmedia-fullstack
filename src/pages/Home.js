import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchHome, makePost, searchUser} from "../actions/actions"
import { useHistory } from "react-router-dom"
import SideBar from "../components/SideBar"
import NavBar from '../components/NavBar'
import CreatePost from "../components/CreatePost"
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
        props.fetchHome()
    }, [])

    
    let filArr = props.following.filter(users => users )
    
    return(
        <div className="home">
            <NavBar />
            <h1>{user}'s Home</h1>
           
        <div className="pagesBg">
           <CreatePost placeholder="Create a post..."/>
           </div>
    
            {filArr.map(users => {
                return(
                props.all_posts.map(posts =>  {
                    if(posts.author === users || posts.author === props.currentuser){
                    return(
                        <div>
                            <div className="postCon">
                            <div className="post">
                            <Link to={`/${posts.author}/post/${posts._id}`}>
                                <Link to={`/${posts.author}`}><h2>{posts.author}</h2></Link>
                                <p>{posts.text_content}</p>
                                <p>{posts.date}</p>
                            </Link>
                            </div>
                            </div>
                        </div>
                    )
                }
                }))
            })}
         
         <div className="postside">
            <SideBar />
            </div>
        </div>
    )

}

export default connect(mapStateToProps, {fetchHome})(Home)