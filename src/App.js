import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import NavBar from './components/partials/NavBar'
import Projects from './components/pages/Projects'

class App extends Component {
  
  render(){
    let post = [
      {
      title: 'WoW',
      body: 'This guy stomped my face with his Bone Reavers Edge. Absolutely one shotted me'
      },
      {
        title: 'CoD',
        body: 'He is not fair. He 360 no scopes me every time i play him'
      },
      {
        title: 'Minecraft',
        body: 'He builds nice little houses'
      }
    ]
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/blog' render={() => <Blog post={post}/>} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
      </div>
      </Router>
  );
  }
}

export default App;
