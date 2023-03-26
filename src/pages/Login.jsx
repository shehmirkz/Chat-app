import React from 'react'

const Login = () => {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className="logo">Welcome to My Chat App</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password '/> 
            </form>
            <button>Sign In</button>
            <p>You don't have an account? Register</p>
        </div>

    </div>
  )
}

export default Login