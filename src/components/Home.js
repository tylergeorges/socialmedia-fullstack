import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchHome, makePost, searchUser} from "../actions/actions"
import { useHistory } from "react-router-dom"
import SideBar from "./SideBar"
const mapStateToProps = (state) =>({
    currentuser: state.currentuser,
    posts: state.posts,
    users: state.users
})


const Home = (props) =>{
    const [logged] = useState(props.currentuser)
    let user = props.currentuser
    const history = useHistory()

    const [postContent] = useState(
        {
            text_content: '',
            author: user,
        }
    )
    const [post, setPost] = useState(postContent)
    const [search, setSearch] = useState('')
    const [results, setSearchResults] = useState('')


    useEffect(()=>{
        props.fetchHome()
    }, [logged])

    const makePost = (e) =>{
        e.preventDefault()
        setPost({text_content: e.target.value, author: user})
    }

    const submitPost = (e) =>{
        e.preventDefault()

        props.makePost(post)
        // console.log(post)
    }

    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)

    }

    const submitSearch = (e) =>{
        e.preventDefault()
        // setSearchResults(search)
        // console.log(results)
        if(search !== '' && props.users.map(username => search === username.username)){

            props.history.push(`/search/${search}`)
        }

    }
    return(
        <div className="home">
            <h1>{user}'s Home</h1>
            <SideBar />
            
            <form>
            <input name="search" type='text' placeholder="Search..." onChange={handleSearch} className="searchBar"/>
            <button type="submit" onClick={submitSearch} style={{ display: 'none' }}/>
            </form>

            <form>
            <input type='text' name="text_content" placeholder="Make a post" onChange={makePost}/>
            <button type="submit" onClick={submitPost}>Post</button>
            </form>

            {props.posts.map(show => {
               if(show.author === user){
                return(
                    <div className="postCon">
                        <div className="post">
                    <h2>{show.author}</h2>
                    <p>{show.text_content}</p>
                    <p>{show.date}</p>
                    </div>
                    </div>
                )
               }
            })}
           
        </div>
    )
}

export default connect(mapStateToProps, {fetchHome, makePost})(Home)