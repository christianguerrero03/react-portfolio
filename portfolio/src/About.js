import React from 'react';
import './About.css';
import headshot from "./Headshot.png";
import etrade from "./etrade.jpg";
import uga from "./UGA.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'


export class About extends React.Component { 

  render () {
    return (
      <div className="About-body">
        
          <div className="About-row" id="Intro">
            <h2>About Me</h2>
            <div className="About-info-left">
                <p>
                  <img src={headshot} alt="Headshot" className="Image"/>
                </p>                
            </div>
            <div className="About-info-right">
              <p>
                Hi, my name is Christian Guerrero and I am an aspiring software engineer based in the metro Atlanta area. I have a passion for programming and have created this site as a portfolio in order to display my past, present, and future projects.<br/>
                <br/>
                I will be graduating from the University of Georgia in May 2020 with a BS in Computer Science, as well as certificates in Applied Data Science and New Media. 
                Through my time at UGA I have had the opportunity to expand my stack and sharpen my technical skills with experience programming in Java, C++, and Python, as well as Swift, JavaScript, React, HTML, XHTML, XML, and CSS.  
                My goal is to apply these skills as well as previous internship experience to a front-end or full-stack development role.<br/>
                <br/>
              </p>
            </div>
            <div className="Scroll-Button"><a href="#Career"><FontAwesomeIcon icon={faAngleDoubleDown} size= "2x" className="Icon"/></a></div>
          </div>
          <div className="About-row" id="Career">
            <h2>Career History</h2>
            <div className="About-info-left">
              <p>
                  <img src={etrade} alt="Etrade" className="Image"/>
                  E*TRADE Financal | Alpharetta,GA
              </p>          
            </div>
            <div className="About-info-right">
              <p>
                <h3>Software Engineer Intern – Sales and Service</h3>Jun 2019 – Aug 2019<br/>
                <ul>
                  <li>Created custom Salesforce objects, fields, and relationships in Salesforce</li>
                  <li>Developed custom Lightning components, Lightning events, and Apex controllers</li>
                  <li>Implemented SOAP web service to Salesforce using Java and XML</li>
                  <li>Successfully presented intern team research project on Robotics Process Automation</li>
                </ul>
              </p>
              <p>
                <h3>Software Engineer Intern - Infrastructure</h3>Jun 2018 – Aug 2018<br/>
                <ul>
                  <li>Worked on Apache Airflow proof of concept for ETL job automation.</li>
                  <li>Wrote custom workflows in Python for accessing Oracle databases and executing SQL commands, sending email and Slack notifications, reading and writing from file.</li>
                  <li>Documented installation steps, framework overview, core concepts, and troubleshooting information onto Confluence page for my team to reference.</li>
                  <li>Developed ReactJS webpage that integrated Airflow REST API calls for triggering jobs remotely. </li>
                </ul>
              </p>
            </div>
            <div className="Scroll-Button"><a href="#Education"><FontAwesomeIcon icon={faAngleDoubleDown} size= "2x" className="Icon"/></a></div>
          </div>
          <div className="About-row" id="Education">
            <h2>Education</h2>
            <div className="About-info-left">
              <p>
                  <img src={uga} alt="UGA" className="Image" style={{backgroundColor:'#FFF'}}/>
                  University of Georgia | Athens, GA
              </p>          
            </div>
            <div className="About-info-right">
              <p>
                <h3>Bachelor of Science in Computer Science</h3>
                Expected - May 2020<br/>
                <ul>
                  <li>Certificate Applied Data Science</li>
                  <li>Certificate New Media</li>
                  <li>Presidential Scholar - Spring 2019</li>
                  <li>Dean’s List - Fall 2017 + 2018</li>
                  <li>Major GPA: 3.94/4.0	</li>
                  <li>Cumulative GPA: 3.90/4.0</li>
                </ul>
                Relevant Coursework:
                <ul>
                  <li>Software Engineering</li>
                  <li>Software Development</li>
                  <li>Computer Architecture</li>
                  <li>Rich Media Production (iOS)</li>
                  <li>Systems Programming</li>
                  <li>Data Structures</li>
                  <li>Computer Graphics 	</li>
                  <li>Data Science I </li>
                </ul>
              </p>
            </div>
            {/*<div className="Scroll-Button"><a href="Home.js"><FontAwesomeIcon icon={faAngleDoubleDown} size= "2x" className="Icon"/></a></div>*/}
          </div>

      </div>
    );
  }
 
}

export default About;
