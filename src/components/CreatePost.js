import { makePost } from "../actions/actions"


const { useEffect, useState } = require("react")
const { connect } = require("react-redux")
const mapStateToProps = (state) =>({
    currentuser: state.currentuser,
    my_posts: state.my_posts,
    all_posts: state.all_posts,
    users: state.users,
    following: state.following,
    isLoading: state.isLoading,
    error: state.error
})
const CreatePost = (props) =>{
    let user = props.currentuser

    const [postContent] = useState(
        {
            text_content: '',
            author: user,
        }
        )
        const [post, setPost] = useState(postContent)
        
    const makePost = (e) =>{
        e.preventDefault()

        setPost({text_content: e.target.value, author: user})
       
    }

    const submitPost = (e) =>{
        e.preventDefault()
        if(post.text_content != '' && post.text_content !== null){
            props.makePost(post)

        }
        // console.log(post)
    }
   
    return(
        <div className="postFormCon">
            <form autoComplete="off" className="postForm">
            <input type='text' name="text_content" placeholder="Make a post..." onChange={makePost} className="createPost" id="createpost"/>
            {/* {post !== '' ? document.querySelector('.postSubmit').classList.toggle('.showbtn'): ''} */}
            <button type="submit" onClick={submitPost} className="postSubmit" id="postsub">Post</button>
            </form>
        </div>
    )
}

export default connect(mapStateToProps, {makePost})(CreatePost)