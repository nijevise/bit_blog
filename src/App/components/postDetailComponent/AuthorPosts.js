import React from 'react'
import { Link } from 'react-router-dom'


class AuthorPosts extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='otherPosts'>
                <h4>{this.props.postItems.length} more posts from same author</h4>
                <ul>
                    {this.props.postItems.map(post => {
                        return (
                            <Link to={'/posts/' + post.id}> <li>{post.title} {post.id} - {post.body}</li></Link>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default AuthorPosts