
import './App.css';
import * as React from 'react';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import Login from "./components/Login.js";
import Home  from "./components/Home.js";
import About from "./components/About.js";
import Layout from './Layout.js';
import Register from './components/Register.js';
import GCS from './components/GCS.js';
import Vital from './components/Vital.js';
import FeverPack from './components/FeverPack.js';
import Lab from './components/Lab.js';
import ABG from './components/ABG.js';
import Surgery from './components/Surgery.js';
import BloodTrans from './components/BloodTrans.js';
import Infusions from './components/Infusions.js';
import LastIO from './components/LastIO.js';
import Documents from './components/Documents.js';
import Issues from './components/Issues.js';
import ADTstatus from './components/ADTstatus.js';
import Ventilation from './components/Ventilation.js';
import Plan from './components/Plan.js';
import Dashboard from './components/Dashboard.js';



function App() {
  return (
      
      <Routes >
          <Route  element={<Layout />}>
            <Route path='/'  exact  Component={Home} />
            <Route path='/About'   Component={About} />
            <Route path='/Register'  Component={Register} />
            <Route path='/GCS'  Component={GCS} />
            <Route path='/Vital'  Component={Vital} />
            <Route path='/FeverPack' Component={FeverPack} />
            <Route path='/Lab' Component={Lab} />
            <Route path='/ABG' Component={ABG} />
            <Route path='/Surgery' Component={Surgery} />
            <Route path='/BloodTrans' Component={BloodTrans} />
            <Route path='/Infusions'  Component={Infusions} />
            <Route path='/LastIO'  Component={LastIO} />
            <Route path='/Documents'  Component={Documents} />
            <Route path='/Issues'  Component={Issues} />
            <Route path='/ADTstatus' Component={ADTstatus} />
            <Route path='/Ventilation' Component={Ventilation} />
            <Route path='/Plan'  Component={Ventilation} />            
          </Route>

          <Route path='/Dashboard' Component={Dashboard} />
          <Route path='/Login' Component={Login}/>
      </Routes>    
  );
}


export default App;


