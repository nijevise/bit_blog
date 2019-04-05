import React from 'react'
import PostSingle from '../../Services/SinglePostService'
import AuthorSingle from '../../Services/SingleAuthorService'
import { Link } from 'react-router-dom'
import PostByUserId from '../../Services/PostByUserId'
import AuthorPosts from '../components/postDetailComponent/AuthorPosts';




class PostDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            author: {},
            authorPost: []
        }
    }

    componentDidMount() {
        this.fetchPost()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.fetchPost()
        }
    }

    fetchPost = () => {
        PostSingle(this.props.match.params.id)
            .then(post => {
                this.setState({
                    post: post
                })
                this.fetchAuthor(post.userId);
                this.fetchPostsByAuthor(post.userId)
            })
    }

    fetchAuthor = (userId) => {
        AuthorSingle(userId)
            .then(author => {
                this.setState({
                    author: author
                })
            })
    }

    fetchPostsByAuthor = (id) => {
        PostByUserId(id)
            .then(result => {
                this.setState({
                    authorPost: result
                })
            })
    }

    render() {
        return (
            <div className="postPage">
                <h2>{this.state.post.title}</h2>
                <Link to={'/users/' + this.state.post.userId}><h4>{this.state.author.name}</h4></Link>
                <p>{this.state.post.body}</p>
                <AuthorPosts postItems={this.state.authorPost.slice(0, 3)} postId={this.state.post.id} />
            </div>
        )
    }
}

export default PostDetails