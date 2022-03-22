import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchHome, getPost, postReply } from "../actions/actions"
import CreatePost from "../components/CreatePost"
import NavBar from "../components/NavBar"
import ReplyPost from "../components/ReplyPost"
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
                <div>
                <div>
                <div className="replypostCon">
                    <div className="mainPost">
                    <h2><Link to={`/${posts.author}`}>{posts.author}</Link></h2>
                    <p>{posts.text_content}</p>
                    <p>{posts.date}</p>
                    </div>

                    </div>
                    <div className="replypostform">
                    <ReplyPost postId={props.match.params.postid}/>
                    <h1 className="repliesheader">Replies</h1>
                     </div>
                </div>
                {posts.replies.map(replies => {
                    return(
                    <div>
                        <div className="postCon">
                        <div className="post">
                        <h2>{replies.author}</h2>
                        <p>{replies.text_content}</p>
                        <p>{replies.date}</p>
                        </div>
                        </div>
                    </div>
                    )
                })}
             </div>
            )
        }
        })}

            <div className="postside">
            <SideBar />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, {getPost, postReply})(Post)