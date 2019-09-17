import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import Table from './components/Table';
import Datepicker from './components/Datepicker';


const Report = ({ match }) => <p>{match.params.w}</p>




class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Kel',
        job: 'None',
      }
    ],
  };

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  };

  render() {

    const { characters } = this.state

    return (
        <div className="container">
            <Table charData={characters} removeCharacter={this.removeCharacter} />
            <h1>Weeks</h1>
            <ul>
              <li>
                <Link to="reports/week/1">Week 1 </Link>
              </li>
            </ul>
            <Route path="reports/week/:w" component={Report} />
            <Datepicker />
        </div>

    )
  }
}
export default App
