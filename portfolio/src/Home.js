import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'




export class Home extends React.Component {

  render () {
    return (
        <div>   
        <body className="App-body">
          <div className="Body-row">
            <div className="Body-info">
              <h1>Christian Guerrero</h1>
              <h3>Software Engineer.</h3>
              <h3>Student.</h3>
              <h3>Creative.</h3>
              <a href="https://www.linkedin.com/in/christianguerrero03/"><FontAwesomeIcon icon={faLinkedin} size= "2x" className="Icon"/></a>
              <a href="mailto:christian.guerrero25@uga.edu"><FontAwesomeIcon icon={faEnvelopeSquare}  size= "2x" className="Icon"/></a>
              <a href="tel:+1-770-778-5974"><FontAwesomeIcon icon={faPhoneSquare}  size= "2x" className="Icon"/></a>              
            </div>
            
          
          </div>
          
        </body>
      </div>
    );
  }
 
}
export default Home;