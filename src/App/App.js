import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'



class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
