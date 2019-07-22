import React from 'react';
import './App.css';
import SlideMenu from "./SlideMenu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"

export class App extends React.Component { 
  render () {
    return (
      <div className="App">
        <SlideMenu className="App-menu"/>
        <Router>
          <header className="App-header">
            <nav>
              <ul>
                <li>
                  <Link to="/"><button className="NavButton">Home</button></Link>
                </li>
                <li>
                  <Link to="/about/"><button className="NavButton">About Me</button></Link>
                </li>
                <li>
                  <Link to="/projects/"><button className="NavButton">Projects</button></Link>
                </li>
              </ul>
            </nav>
          </header>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/projects/" component={Projects} />
        </Router>
        {/*<footer className="App-footer"> 

        </footer>*/}
      </div>
    );
  }
 
}

export default App;
