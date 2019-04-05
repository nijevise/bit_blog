import React from 'react'
import { Link } from 'react-router-dom'

const AuthorList = (props) => {
    return (
        <Link to={'/users/' + props.authorId}>< li > {props.authorName}</li ></Link>
    )
}

export default AuthorList