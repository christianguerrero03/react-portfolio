import React from 'react';
import './App.css';
import resume from "./Resume.png";  


export class Resume extends React.Component {

  render () {
    return (
      <div className="App-body">
          <div className="Body-row">
            <div className="Body-info">
              
              <img src={resume} alt="home screen" className="ImageWide"/>
            </div>
          </div>
      </div>
    );
  }
 
}

export default Resume;
