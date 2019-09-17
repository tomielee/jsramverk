import React, { Component } from 'react'
import '../style/About.css'

const About = () => {
    return (<div>
        <h2>About me</h2>
        <p>Detta är en ME sida för Jennifer. Läser andra året  webbprogrammering på distans. En utbildning som ges på BTH. Är nybörjare inom all programmering.</p>
    </div>
  )
}

class Hello extends Component {
  render() {

    return (
        <div className="container">
            <About />
        </div>
    )
  }
}
export default Hello
