import React from 'react'

const AuthorsName = (props) => {
    return (
        <div className='authorName'>
            <img src="https://via.placeholder.com/150" />
            <h3>{props.name}</h3>
            <div className="authorNameText">
                <p>username: {props.authorInfo.username}</p>
                <p>email: {props.authorInfo.email} </p>
                <p>phone: {props.authorInfo.phone}</p>
            </div>
        </div>
    )
}

export default AuthorsName