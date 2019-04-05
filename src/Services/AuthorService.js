import Author from '../Models/Author'

const AuthorService = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => {
            return result.json()
        }).then((authors) => {
            const authorResult = authors.map((author) => {
                return new Author(author.id, author.name, author.username, author.email, author.phone, author.address.street, author.address.city, author.address.zipcode, author.company.name, author.company.bs)
            })
            return authorResult;
        })
}
export default AuthorService