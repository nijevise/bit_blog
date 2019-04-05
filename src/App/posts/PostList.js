import React from 'react'
import ListItem from './ListItem'

const PostList = (props) => {
    return (
        <ul>
            {props.postItems.map(post => {
                return (
                    <ListItem id={post.id} title={post.title} text={post.body} />
                )
            })}
        </ul>
    )
}

export default PostList