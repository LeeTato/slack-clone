import React from 'react';
import styled from "styled-components";
import Sidebar from "./components/Sidebar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    
    <Router>
    <Header/>
    <AppBody>
    <Sidebar/>
        <Switch>
          <Route path="/" exact>
            {/*chat*/}
          </Route>
        
        </Switch>
        </AppBody>
      
    </Router>
      
    </div>
  );
}

export default App;

const AppBody=styled.div`
display:flex;
height:100vh;
`;
