import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PostPage from '../posts/PostPage'
import About from '../about/About'
import Authors from '../authors/Authors'
import PostDetails from '../posts/PostDetails'
import AuthorPage from '../posts/AuthorPage'

const Main = () => {
    return (
        <Switch>
            <Route path='/users/:id' component={AuthorPage} />
            <Route path='/posts/:id' component={PostDetails} />
            <Route path='/about' component={About} />
            <Route path='/authors' component={Authors} />
            <Route exact path='/' component={PostPage} />
        </Switch>
    )
}
export default Main 