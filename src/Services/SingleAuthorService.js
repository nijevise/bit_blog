import Author from '../Models/Author';

const AuthorSingle = (id) => {

    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(result => {
            return result.json()
        })
        .then(author => {
            return new Author(author.id, author.name, author.username, author.email, author.phone, author.address.street, author.address.city, author.address.zipcode, author.company.name, author.company.bs)
        })
}


export default AuthorSingle