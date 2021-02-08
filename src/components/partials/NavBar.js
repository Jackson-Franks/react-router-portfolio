import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <header>
            <nav>
                <Link to='/'>Home</Link>{'  |  '}
                <Link to='/blog'>Blog</Link>{'  |  '}
                <Link to='/projects'>See My Work</Link>{'  |  '}
                <Link to='/about'>About Me</Link>
            </nav>
            </header>
        )
    }
}

export default NavBar