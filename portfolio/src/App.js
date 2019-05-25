import React from 'react';
import './App.css';
//import {slide as Menu} from 'react-burger-menu'
import SlideMenu from "./SlideMenu";
import headshot from "./Headshot.jpg";

export class App extends React.Component {

  render () {
    return (
      <div className="App">
        <SlideMenu className="App-menu"/>
        <header className="App-header">
          <h2>Christian Guerrero</h2>
        </header>
        <body className="App-body">
          <div className="Body-row">
            <img src={headshot} alt="Headshot" className="Headshot"/>
            <div className="Body-info">
              <h3>Welcome to my portfolio!</h3>
              <p>More info about me</p>
            </div>
          </div>
          
        </body>
        <footer className="App-footer">
  
        </footer>
      </div>
    );
  }
 
}

export default App;
