import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Markdown from 'react-markdown'


import w2 from '../data/w2.md';

const text1 = () => {
    return (<>
      <h2>REPO</h2>
      <p>
        <Link to="https://github.com/jeneljenel/jsramverk">Repository on Github </Link>
      </p>

      <h2>README.md</h2>
      <p>This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App </a>.</p>

      <h3> NPM</h3>
      <p>You will need Node.js installed on your enviroment.
            Node includes <a href="https://www.npmjs.com/">(NPM)</a>.
            </p>

      Use
            <code> $ brew install npm</code>

      <p>For further installation check out <a href="https://nodejs.org/en">Node.js </a>official website.
            </p>

      <h3>npm start</h3>
      <p>Runs the app in the development mode.

            Open <a href="http://localhost:3000">http://localhost:3000 </a> to view it in the browser.
        The page will reload if you make edits.
            You will also see any lint errors in the console.</p>
    </>
    )
}

const text2 = (mdfile) => {
  let src = mdfile;

  console.log(mdfile);
  return (
    <Markdown source={src} />
    )
}

const reports = [
    {
        week: '1',
        title: 'Week 1 - Frontend',
        text: text1(),
    },

    {
        week: '2',
        title: 'Week2 - UX',
      text: text2(w2)
    }
]

function Report ({ match }) {
    const report = reports.find(({ week }) => week === match.params.repWeek)

    return (
      <div>
        <h1>{report.title}</h1>
        <p>{report.text}</p>

      </div>
    )

}


class Reports extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: ''
    }
  }

    render() {
    const { match } = this.props

    return (
    <div className="container">
      <h1>Reports</h1>
      <ul className="menu">
      {reports.map(({ title, week }) => (
        <li key={week}>
        <Link to={`${match.url}/week/${week}`}>{title}</Link>
        </li>
      ))}
      </ul>

    <hr />

    <Route path={`${match.path}/week/:repWeek`} component={Report}/>
    </div>
    )
    }

}
export default Reports
