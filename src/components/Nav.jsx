import React from 'react'

function Nav() {
  return (
    <nav className='nav-bar'>
        <div>
            <img src="images/brand_logo.png" alt="brand-logo" />
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>

      <button>login</button>
    </nav>
  )
}

export default Nav