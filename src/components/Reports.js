import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Markdown from 'react-markdown'

import w1 from '../data/w1.md'
import w2 from '../data/w2';


function readMd(mdfile) {
  let file = mdfile;

    console.log(file);

    return(
      <Markdown source={file} />
    )
}





const reports = [
    {
        week: '1',
        title: 'Week 1 - Frontend',
        text: readMd(w1),
    },

    {
        week: '2',
        title: 'Week2 - UX',
      text: readMd(w2)
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
