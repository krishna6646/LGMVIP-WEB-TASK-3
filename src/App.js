import React, { Component } from 'react'
import NavBar from './components/NavBar'
import User from './components/User'

export default class App extends Component {
  render() {
    return (
      <div>
       <NavBar/>
       <User/>
       </div>
    )
  }
}