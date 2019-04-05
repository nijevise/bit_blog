import React from 'react'
import { Link } from 'react-router-dom'
import About from '../about/About'
import Authors from '../authors/Authors'
import PostList from '../posts/PostPage'



const Header = () => {
    return (
        <header>
            <div className="header-heading">
                <h1>Bit-Blog</h1>
            </div>
            <div className="header-nav">
                <ul>
                    <li><Link to='/' component={PostList}>Home</Link></li>
                    <li> <Link to='/about' component={About}> About </Link></li>
                    <li><Link to='/authors' component={Authors}>Authors</Link></li>
                </ul>
            </div>

        </header>
    )
}

export default Header