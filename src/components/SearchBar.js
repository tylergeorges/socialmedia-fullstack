import { connect } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

const mapStateToProps = (state) =>({
    currentuser: state.currentuser,
    my_posts: state.my_posts,
    all_posts: state.all_posts,
    users: state.users,
    following: state.following,
    isLoading: state.isLoading,
    error: state.error,
    usersearched: state.usersearched,
})

const SearchBar = (props) =>{
    const [search, setSearch] = useState('')
    
    let history = useHistory()
    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)

    }
    
    const submitSearch = (e) =>{
        e.preventDefault()
        // setSearchResults(search)
        // console.log(results)
        if(search !== '' && props.users.map(username => search === username.username)){
            history.push(`/search/${search}`)
        }

    }
    return(
        <div>
             <form autoComplete="off">
             <div className="searchField" >
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
            <div className="fa fa-search"></div>
            <input name="search" type='text' placeholder="Search for users..." onChange={handleSearch} className="searchBar"/>
            
            <button type="submit" onClick={submitSearch} style={{ display: 'none' }}/>
            
            {/* <div className="searchDropDown">
            {props.users.map(show => {
                if(search === show.username ){
                return(
                    <div>
                        <li>{show.username}</li>
                    </div>
                )
            }
                    
                    })}
            </div> */}
            </div>
            
            </form>
            
           
        </div>
    )
}

export default connect(mapStateToProps, {})(SearchBar)