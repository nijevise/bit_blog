import Post from '../Models/Post';

const PostSingle = (id) => {

    return fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(result => {
            return result.json()
        })
        .then(postsResult => {
            return new Post(postsResult.userId, postsResult.id, postsResult.title, postsResult.body)
        })
}


export default PostSingle