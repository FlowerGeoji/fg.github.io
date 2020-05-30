import React from 'react'
import './App.css'
import {CssBaseline, Container, Toolbar} from '@material-ui/core'
import Header from './components/Header'
import SkillsCard from './components/SkillsCard'

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Header/>
      <Toolbar />
      <Container maxWidth="xl" style={{height: 1000, background: '#ff0000'}}>
        <SkillsCard/>
      </Container>
    </React.Fragment>
  );
}

export default App;
