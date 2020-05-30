import React from 'react'
import './App.css'
import {CssBaseline, Container, Typography} from '@material-ui/core'
import Header from './components/Header'

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Header/>
      <Container maxWidth="xl" style={{height: 1000, background: '#ff0000'}}>
        <Typography>
          It's a test
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
