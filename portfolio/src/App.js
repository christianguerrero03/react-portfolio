import React from 'react';
import './App.css';
import {slide as Menu} from 'react-burger-menu'

function App() {
  var isMenuOpen = function(state) {
    return state.isOpen;
  };
  return (
    <div className="App">
      <Menu onStateChange={isMenuOpen}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        {/*<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*/}
      </Menu>
      <header className="App-header">
        <h1>Christian Guerrero</h1>
      </header>
      <body className="App-body">

      </body>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
