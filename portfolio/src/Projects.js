import React from 'react';
import './App.css';
import homescreen from "./HomeScreen.png"; 


export class Projects extends React.Component {

  render () {
    return (
      <div className="App-body">
          <div className="Body-row">
            <div className="Body-info">
              <img src={homescreen} alt="home screen" className="ImageWide"/>
            </div>
          </div>
      </div>
    );
  }
 
}

export default Projects;
