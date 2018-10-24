import React, { Component } from 'react';
import './styles/styles.scss';
import Navbar from './components/Navbar';
import DropDownMenu from './components/DropDownMenu';

class App extends Component {
  state = {
    dropDownMenuVisible: false
  };

  dropdownMenuClickHandler = () => {
    this.setState(prevState => {
      return { dropDownMenuVisible: !prevState.dropDownMenuVisible };
    });
  };

  render() {
    let dropdownMenu;

    if (this.state.dropDownMenuVisible) {
      dropdownMenu = <DropDownMenu />;
    }
    return (
      <div className="App" style={{ height: '100%' }}>
        <Navbar dropdownMenuClickHandler={this.dropdownMenuClickHandler} />
        {dropdownMenu}
        <main style={{ marginTop: '6.4rem' }}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
