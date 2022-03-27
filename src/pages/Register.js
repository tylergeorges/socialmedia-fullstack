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
            document.getElementById('loginSlider').classList.add("sliderNotFocused")
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
                <p id="headercaption">Create a Account</p>

            </div>
            
            <div className="linkSliderCon">
                <NavLink to="/login"id="loginSlider">Login</NavLink>
                <NavLink to="/register"id="regSlider">Register</NavLink>
            </div>
            <div className="weltxtcon">
            <div className="formHeaderCon">
                
                <h1 id="formHeader">Register</h1>
            </div>
                <form className="welcomelinks" autoComplete="off">
                <input type='text' placeholder="Username" onChange={handleUser} id="username" />
                <input type='password' placeholder="Password" onChange={handlePass} id="password" />
                    <button type="submit" className="formSubmit" onClick={handleSubmit} >Register</button>
                    <br />
                    <br />
                    <nav className="linkotherpage">
                        <div className="linkPageFooter">
                        <p>Have an account? <Link to="/login" id="reglink">Login</Link></p>
                        </div>
                    </nav>
                </form>
              
            </div>
    
    </div>
    )
}

export default connect(mapStateToProps, {fetchRegister, addAccount})(Register)