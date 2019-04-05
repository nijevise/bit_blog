import React from 'react'
import PostList from './PostList'
import PostService from '../../Services/PostService'



class PostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts = () => {
        PostService()
            .then(postsResult => {
                this.setState({
                    posts: postsResult
                })
            })
    }


    render() {
        return (
            <div className="posts">
                <PostList postItems={this.state.posts.slice(0, 10)} />
            </div>
        )
    }
}

export default PostPage