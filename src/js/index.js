import React from 'react';
import ReactDOM from 'react-dom';

import {MuiThemeProvider} from '@material-ui/core/styles'
import {theme} from './theme'

//import AppBarMenu from './menu';
import Content from './main';

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Content />
    </MuiThemeProvider>,
  document.querySelector('#root')
);