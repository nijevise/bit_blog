import React from 'react'
import AuthorList from '../components/authorComponents/AuthorList'
import PostAuthors from '../../Services/AuthorService'

class AllAuthors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        this.fetchAuthors()
    }

    fetchAuthors = () => {
        PostAuthors()
            .then(authorsResult => {
                this.setState({
                    authors: authorsResult
                })
            })
    }

    render() {
        return (
            <ul>
                {this.state.authors.map(author => {
                    return <AuthorList authorName={author.name} authorId={author.id} />
                })}
            </ul>
        )
    }
}

export default AllAuthors