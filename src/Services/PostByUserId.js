const PostByUserId = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
        .then(result => {
            return result.json()
        })
}

export default PostByUserId