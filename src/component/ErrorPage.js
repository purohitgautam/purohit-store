import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='error'>
        <h3>error</h3>
        <span>oops! you're lost</span>
        <NavLink to={'/'}>
            <button>Go to Home Page</button>
        </NavLink>
    </div>
  )
}
