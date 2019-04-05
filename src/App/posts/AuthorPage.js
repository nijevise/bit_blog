import React from 'react'
import AuthorSingle from '../../Services/SingleAuthorService'
import { Link } from 'react-router-dom'
import AuthorsName from '../components/authorComponents/AuthorsName'
import AuthorsAddress from '../components/authorComponents/AuthorsAddress'
import AuthorsCompany from '../components/authorComponents/AuthorsCompany'

class singleAuthor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: null,
            id: props.match.params.id
        }
    }

    componentDidMount() {
        this.fetchAuthor()
    }

    fetchAuthor = () => {
        AuthorSingle(this.state.id)
            .then(result => {
                console.log(result);
                this.setState({
                    author: result
                })
            })
    }

    render() {

        if (!this.state.author) {
            return <h5>Loading...</h5>
        }

        return (
            <div className='authorInfo'>
                <Link to='/authors'> All authors</Link >
                <h2>{this.state.author.name}</h2>
                <AuthorsName authorInfo={this.state.author} />
                <AuthorsAddress authorInfo={this.state.author} />
                <AuthorsCompany authorInfo={this.state.author} />
            </div >
        )
    }
}

export default singleAuthor