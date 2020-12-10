import React from 'react'
import{Link} from 'react-router-dom'

const SignIn = ()=>{
    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2> FlashBack</h2>
                <input type ="text" placeholder="email"/>
                <input type ="text" placeholder="password"/>
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1" style={{ marginTop:"20px"}}>
                    Sign In 
                </button>
                <h5>
                    <Link to="/signup" style={{ fontSize:"15px"}}>Don't Have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default SignIn