import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { deletePost, fetchHome, makePost, searchUser} from "../actions/actions"
import { useHistory } from "react-router-dom"
import SideBar from "../components/SideBar"
import NavBar from '../components/NavBar'
import CreatePost from "../components/CreatePost"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import DropDownBtn from "../components/dropdownbtn"

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

    const [show, setShow] = useState(false)
    const [postid, setpostid] = useState('')
    
    useEffect(()=>{
        props.fetchHome()
    }, [])

    const deletePost = (e) =>{
        e.preventDefault()
        props.deletePost({postId: e.target.value})
    }

    const handleDropDown = (e) =>{
        setShow(!show)
        setpostid(e.target.value)
    }
    
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

                            <div className="postdropdown">
                            
                            {props.currentuser === posts.author ? 
                            <DropDownBtn icon={<FontAwesomeIcon icon={faEllipsisH} value={posts._id} onClick={handleDropDown} className="ellipsis"/>}>
                            <div className="dropmenu">
                            <button onClick={deletePost} value={posts._id} id="delete" className="deletepost">
                            <i className="fa fa-trash" style={{color: "red"}}/>Delete</button>
                            </div>
                            </DropDownBtn>: ''}
          
                            </div>

                                <h2><Link to={`/${posts.author}`}>{posts.author}</Link></h2>
                            <Link to={`/${posts.author}/post/${posts._id}`}>
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

export default connect(mapStateToProps, {fetchHome, deletePost})(Home)