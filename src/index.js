import React from 'react'
import ReactDOM from 'react-dom'
import {
    Route,
    Link,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'

import App from './App';
import About from './components/About';
import Reports from './components/Reports';
import Signup from './components/Signup';
import Register from './components/Register';
import Datepicker from './components/Datepicker';

import Notfound from './notfound';

import './index.css';

const routing = (
  <Router>
    <div>
        <ul className="menu">
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/reports">Reports</Link>
            </li>
            <li>
                <Link to="/signup">Sign up</Link>
            </li>
            <li>
                <Link to="/App">Test</Link>
            </li>
            <li>
                <Link to="/date">D</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={About} />
            <Route path="/reports" component={Reports} />
            <Route path="/signup" component={Signup} />
            <Route path="/register" component={Register}/>
            <Route path="/date" component={Datepicker} />



            <Route path="/App" component={App} />
            <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'))
