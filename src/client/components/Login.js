import React from 'react'
import { browserHistory, Link } from 'react-router'

import 'assets/styles/login.css'

export default React.createClass({
  handleSubmit: function(e) {
    e.preventDefault()
    browserHistory.push('/chat')
  },
  render: function () {
    return (
      <div id="container">
        <div className="header">
          <h1>Common Ground</h1>
          <p>"Where different visions can come together and reach a Common Ground"</p>
        </div>
          <div className="loginForm">
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Login</legend>
                <input type="text" id="username" placeholder="Username" /><br />
                <input type="password" id="password" placeholder="Password" /><br />
                <br />
                <button className="button" type="submit">Login</button>
                <Link to="/register"><button className="button button--state-register">Register</button></Link>
              </fieldset>
            </form>
          </div>
      </div>
    )
  }
})  
