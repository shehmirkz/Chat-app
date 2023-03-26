import React from 'react'

const Register = () => {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className="logo">Welcome to My Chat App</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='Display Name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password '/> 
                <input style={{display: 'none'}} type="file" id='file' /> 
                <label htmlFor='file'>
                    Select Avatar
                </label>
            </form>
            <button>Sign Up</button>
            <p>Do you have an account? Login</p>
        </div>

    </div>
  )
}

export default Register