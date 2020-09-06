import React, { Component } from 'react';
import { render } from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class AppBarMenu extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      open: false,
      pageNumber: 1,
    };
    this.handleDrawerClick = this.handleDrawerClick.bind(this);
    this.handleMenuClick1 = this.handleMenuClick1.bind(this);
    this.handleMenuClick2 = this.handleMenuClick2.bind(this);
  }

  handleMenuClick1() {
    this.setState({ pageNumber: 1 });
    this.handleDrawerClick();
  }

  handleMenuClick2() {
    this.setState({ pageNumber: 2 });
    this.handleDrawerClick();
  }

  menuControl() {
    if (this.state.pageNumber == 2) {
      return (<div><h1>Welcome to Menu 2</h1></div>);
    } else {
      return (<div><h1>Welcome to Menu 1</h1></div>);
    }
  }

  handleDrawerClick() {
    if (this.state.open == false)
      this.setState({ open: true });
    else
      this.setState({ open: false });
  }

  render() {
    return (
      <div>
          <AppBar
            title="My App"
            onLeftIconButtonClick={this.handleDrawerClick.bind()}
          >
            <Button variant="contained" color="primary" target="_blank" href="https://github.com/aya-devs/portfolio">
                View On GitHub
            </Button>
          </AppBar>

          <Drawer open={this.state.open}>
            <MenuItem onClick={this.handleMenuClick1.bind()}>Menu Item 1</MenuItem>
            <MenuItem onClick={this.handleMenuClick2.bind()}>Menu Item 2</MenuItem>
          </Drawer>

        {this.menuControl()}
      </div>
    );
  }
}

export default AppBarMenu;