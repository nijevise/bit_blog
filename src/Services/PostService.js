import Post from '../Models/Post';

const PostService = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(result => {
            return result.json()
        })
        .then(postsResult => {
            const posts = postsResult.map((post) => {
                return new Post(post.userId, post.id, post.title, post.body)
            })
            return posts
        })
}


export default PostService 