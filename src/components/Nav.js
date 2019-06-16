import React from 'react'
import {Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className=' container text-right'>
            <Link to="/" className="text-dark bg-light " > Search Books</Link>
            <Link to="/saved" className="text-dark bg-light ml-5"> Saved Books</Link>
        </nav>

    )
}
export default Nav;