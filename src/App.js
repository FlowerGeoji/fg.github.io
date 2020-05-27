import React from 'react'
import logo from './logo.svg'
import './App.css'
import {CssBaseline, Container, Typography} from '@material-ui/core'

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="xl" style={{height: '100%', background: '#ff0000'}}>
        <Typography>
          It's a test
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
