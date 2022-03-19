import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { searchUser , fetchHome} from "../actions/actions"
import { useEffect } from "react"
import { useState } from "react"
import SideBar from "../components/SideBar"
import { useHistory } from "react-router-dom"
import NavBar from "../components/NavBar"

const mapStateToProps = (state) =>({
    currentuser: state.currentuser,
    all_posts: state.all_posts,
    users: state.users,
    usersearched: state.usersearched
})


const Search = (props) =>{
    let results = props.match.params.user
    // console.log(props)
    let history = useHistory()
    const [search, setSearch] = useState('')
    const [newResults, setSearchResults] = useState('')

    useEffect(() =>{
        props.fetchHome(props.currentuser)
        if(newResults === ''){
            props.searchUser(results)

        }else{
            props.searchUser(newResults)
            props.history.push(`/search/${newResults}`)
        }
        // console.log(props.searchUser(results))
    },[])



    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)

    }

    const submitSearch = (e) =>{
        e.preventDefault()
        // setSearchResults(search)
        // console.log(results)
        if(search !== '' && props.users.map(username => search === username)){
            setSearchResults(search)
            console.log(newResults)
            // history.go(`/search/${search}`)
        }

    }
    return(
        <div className="searchPage">
            <SideBar/>
            <NavBar />         

           
            <h1>Search results for "{props.usersearched}"</h1>
         
            {props.all_posts.map(show => {
                // console.log(show)
               if(show.author === props.usersearched){
                return(
                    <div className="postCon">
                        <div className="post">
                    <Link to={`/${show.author}`}><h2>{show.author}</h2></Link>
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

export default connect(mapStateToProps, {searchUser , fetchHome})(Search)