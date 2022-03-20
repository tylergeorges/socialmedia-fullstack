import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchHome, getPost, postReply } from "../actions/actions"
import CreatePost from "../components/CreatePost"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"

const mapStateToProps =(state) => ({
    currentuser: state.currentuser,
    all_posts: state.all_posts
})


const Post = (props) =>{
    console.log(props)
    useEffect(() =>{
        props.getPost(props.match.params.postid)
    },[])

    return(
        <div className="postRoute">
            <NavBar />
           
    {props.all_posts.map(posts => {
            if(posts._id === props.match.params.postid){
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

        <div>
         <CreatePost placeholder="Reply..." onClick={reply}/>
         </div>

            <SideBar />

        </div>
    )
}

export default connect(mapStateToProps, {getPost, postReply})(Post)