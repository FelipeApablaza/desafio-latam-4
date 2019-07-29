import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/places'}>Places</Link>
            <Link to={'/heroes'}>Heroes</Link>
        </div>
    )
}

export default Nav