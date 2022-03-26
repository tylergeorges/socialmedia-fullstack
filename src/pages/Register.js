import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { addAccount, fetchRegister } from "../actions/actions"
import { Link, NavLink } from "react-router-dom"

const mapStateToProps = (state) => ({
    users: state.users
})


const Register = (props) =>{


    useEffect(() =>{
        props.fetchRegister()
        if(props.match.url === '/register'){
            document.getElementById('regSlider').classList.add("slideBottom")
        }
    },[])

    const [account] = useState({
        username: '',
        password: ''
    })
    const [pass, setPass] = useState('')
    const [user, setUser] = useState('')
    const [acc, setNewAcc] = useState(account)

    const [exists, setExists] = useState(false)
    const [blank, setBlank] = useState(false)

    const handleUser = (e) =>{
        e.preventDefault()
        setUser(e.target.value)

    }

   const handlePass = (e) =>{
        e.preventDefault()
        // setPass({[e.target.name]: [e.target.value]})
            setPass( e.target.value)


    }


    const handleSubmit = (e) =>{    
        e.preventDefault()
    //    if( props.users.users.map(username => user !== username.username)){
    //         console.log('made acc')
    //     }else{
    //         console.log('acc not made')
    //     }
        if(user !== '' && props.users.users.map(username => user !== username.username) && pass !== ''){
            // setNewAcc({username: user, password: pass})
            props.addAccount({username: user, password: pass})
            }else if( user === '' || pass === '') {
                setBlank(!blank)
            } else if (props.users.users.map(username =>  user === username.username)){
                setExists(!exists)
            }
        setNewAcc({username: user, password: pass})
    }

    return(
        <div className="formCon">
               <div className="welheadercon">
                <h1 id="accountheader">Register</h1>
            </div>
            
            <div className="linkSliderCon">
                <NavLink to="/login"id="loginSlider">Login</NavLink>
                <NavLink to="/register"id="regSlider">Register</NavLink>
            </div>
            <div className="weltxtcon">
            <div className="formHeaderCon">
                
                <h1 id="formHeader">Register</h1>
            </div>
                <nav className="welcomelinks">
                <input type='text' placeholder="username" onChange={handleUser} id="username" />
                <input type='text' placeholder="password" onChange={handlePass} id="password" />
                    <button type="submit" className="formSubmit" onClick={handleSubmit} >Register</button>
                    <br />
                    <br />
                    <nav className="linkotherpage">
                        <div className="linkPageFooter">
                        <p>Have an account? <Link to="/login" id="reglink">Login</Link></p>
                        </div>
                    </nav>
                </nav>
              
            </div>
        {/* <div className="formConCenter">
            <div className="formHeaderCon">
                <h1 id="formHeader">Register</h1>
            </div>

            <form className="formAccInfo">
                <input type='text' placeholder="username" onChange={handleUser} id="username" />
                <input type='text' placeholder="password" onChange={handlePass} id="password" />
                <button type="submit" className="formSubmit" onClick={handleSubmit} >Register</button>
                <br />
                <Link to="/login" id="loginlink">Login</Link>
                <br />
            </form>
        </div> */}
    </div>
    )
}

export default connect(mapStateToProps, {fetchRegister, addAccount})(Register)