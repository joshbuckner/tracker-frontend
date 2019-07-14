import React from 'react'
import ReactDOM from 'react-dom'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.scss'
import App from './App/App'
import Contact from './containers/Contact/Contact'
import Users from './containers/Users/Users'
import NotFound from './containers/NotFound/NotFound'

const routing = (
	<Router>
		<div>
			<ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/users' component={Users} />
				<Route path='/contact' component={Contact} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'))