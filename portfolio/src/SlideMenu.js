import React from 'react';
import './SlideMenu.css';
import { slide as Menu } from 'react-burger-menu'

export class SlideMenu extends React.Component {

  
  constructor (props) {    
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    
    return (
      <div>
        <Menu isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>
          <a id="home" className="menu-item" href="/"><h3>Home</h3></a>
          <a id="about" className="menu-item" href="/about"><h3>About</h3></a>
          <a id="projects" className="menu-item" href="/projects"><h3>Projects</h3></a>
          <a id="resume" className="menu-item" href="/resume"><h3>Resume</h3></a>
          {/*<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*/}
        </Menu>
      </div>
     
    );
  }
}

export default SlideMenu;
