import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Logo Here</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Shehmir</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar