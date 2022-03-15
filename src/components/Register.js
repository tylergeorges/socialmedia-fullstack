import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { addAccount, fetchRegister } from "../actions/actions"
import { Link } from "react-router-dom"

const mapStateToProps = (state) => ({
    users: state.users
})


const Register = (props) =>{


    useEffect(() =>{
        props.fetchRegister()
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
        console.log(props)
        if(user !== '' && props.users.users.map(username => user !== username.username) && pass !== ''){
            // setNewAcc({username: user, password: pass})
            props.addAccount({username: user, password: pass})
            }else if( user === '' || pass === '') {
                setBlank(!blank)
            } else if (props.users.users.map(username =>  user === username.username)){
                setExists(!exists)
            }
        setNewAcc({username: user, password: pass})
        console.log(acc)
    }


    console.log(props)
    return(
        <div>
            <h1>Register</h1>
        <form>
           { blank ? <p>One or more fields is blank!</p> : ''}
           { exists ? <p>Username already exists!</p> : ''}
            <input type='text' placeholder="username" name="username"onChange={handleUser} id="username"/>

            <input type='text' placeholder="password" name="password"onChange={handlePass} id="password"/>
            <button type="submit" onClick={handleSubmit}>Register</button>

        </form>
        <Link to="login">Login</Link>
        </div>
    )
}

export default connect(mapStateToProps, {fetchRegister, addAccount})(Register)