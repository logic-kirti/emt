
import './App.css';
import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
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
          <Route path='/'  element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/About'  element={<About />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/GCS' element={<GCS />} />
            <Route path='/Vital' element={<Vital />} />
            <Route path='/FeverPack' element={<FeverPack />} />
            <Route path='/Lab' element={<Lab />} />
            <Route path='/ABG' element={<ABG />} />
            <Route path='/Surgery' element={<Surgery />} />
            <Route path='/BloodTrans' element={<BloodTrans />} />
            <Route path='/Infusions' element={<Infusions />} />
            <Route path='/LastIO' element={<LastIO />} />
            <Route path='/Documents' element={<Documents />} />
            <Route path='/Issues' element={<Issues />} />
            <Route path='/ADTstatus' element={<ADTstatus />} />
            <Route path='/Ventilation' element={<Ventilation />} />
            <Route path='/Plan' element={<Plan />} />            
          </Route>

          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Login' element={<Login/>}/>
      </Routes>    
  );
}


export default App;


