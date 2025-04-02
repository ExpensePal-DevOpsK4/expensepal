import React from 'react'
import "./components.scss"

export const Navbar = () => {
  return (
      <nav>
          <p className='logo'>Logo</p>
          <div className='user'>
              <img src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
                  alt="avatar"
              />
              <p>Username</p>
          </div>
    </nav>
  )
}
