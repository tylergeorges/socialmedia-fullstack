import { useState } from "react"

const DropDownBtn = (props) =>{

    const [show, setShow] = useState(false)
    const [postid, setpostid] = useState('')


    const handleDropDown = (e) =>{
        setShow(!show)
        setpostid(e.target.value)
    }

    return(
        <>
            <a  onClick={handleDropDown}>
                {props.icon}
            </a>

            {show && props.children}
        </>
    )
}

export default DropDownBtn