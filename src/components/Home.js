import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchHome, makePost } from "../actions/actions"
const mapStateToProps = (state) =>({
    currentuser: state.currentuser,
    posts: state.posts
})


const Home = (props) =>{
    const [logged] = useState(props.currentuser)
    let user = props.currentuser

    const [postContent] = useState(
        {
            text_content: '',
            author: '',
        }
    )
    const [post, setPost] = useState(postContent)
    useEffect(()=>{
        props.fetchHome()
        
    },[logged])

    const makePost = (e) =>{
        e.preventDefault()
        setPost({...post, [e.target.name]: e.target.value})
    }
    // console.log(props)
    const submitPost = (e) =>{
        e.preventDefault()

        // setPost(postContent)
        props.makePost(post)
        console.log(post)
    }

    return(
        <div>
            <h1>{user}'s Home</h1>

            <h2>{user}'s posts:</h2>

            <form>
            <input type='text' name="text_content" placeholder="Make a post" onChange={makePost}/>
            <button type="submit" onClick={submitPost}>Post</button>
            </form>

            {/* <p>{post}</p> */}
            {props.posts.map(show => {
                return(
                    <div>
                    <p>{show.text_content}</p>
                    <p>{show.date}</p>
                    </div>
                )
            })}
            {/* <p>{props.data.posts !== undefined ? props.data.posts.text_content : ''}</p> */}
            {/* <input type='text' name="private"/> */}
            <Link to="login">Logout</Link>
        </div>
    )
}

export default connect(mapStateToProps, {fetchHome, makePost})(Home)