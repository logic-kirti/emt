import './index.css';
import React from 'react';
import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <div>
    
     <header> 
          <div class="w3-bar   w3-top" style={{height:40+'px', backgroundColor:'#f3ff47'}}>
              <div class="w3-bar-item w3-text-black w3-hover-text-grey"><a style={{textDecoration:'none'}} href="/">Home</a></div>
              <div class="w3-bar-item w3-text-black w3-hover-text-grey"><a style={{textDecoration:'none'}} href="/About">About</a></div>
              <div class="w3-bar-item w3-text-black w3-hover-text-grey"><a style={{textDecoration:'none'}} href="/Register">Register Patient</a></div>
              <div class="w3-bar-item w3-text-black w3-hover-text-grey"><a style={{textDecoration:'none'}} href="/Dashboard">View Dashboard</a></div>              
              <div class="w3-bar-item w3-text-black w3-hover-text-grey w3-right"><i class="fa fa-user-circle-o" style={{fontSize:28+'px'}}></i>&nbsp;</div>
          </div>
      </header>
    <div>
          <div class="sidebar" style={{marginTop:40+'px'}}>
              <a href="/"><i class="fa fa-fw fa-home"></i> Home</a>
              <a href="/Register"><i class="fa fa-fw fa-user-plus"></i>Patient Registration</a>
              <a href="/GCS"><i class="fa fa-fw fa-edit"></i>GCS</a>
              <a href="/Vital"><i class="fa fa-fw fa-user"></i>Vital</a>
              <a href="/FeverPack"><i class="fa fa-fw fa-user"></i>FeverPack</a>
              <a href="/Lab"><i class="fa fa-fw fa-user"></i>Lab</a>
              <a href="/ABG"><i class="fa fa-fw fa-user"></i>ABG</a>
              <a href="/Surgery"><i class="fa fa-fw fa-user"></i>Surgery</a>
              <a href="/BloodTrans"><i class="fa fa-fw fa-user"></i>Blood Transufsion</a>
              <a href="/Infusions"><i class="fa fa-fw fa-user"></i>Infusions</a>
              <a href="/LastIO"><i class="fa fa-fw fa-user"></i>Last 24H I/O</a>
              <a href="/Documents"><i class="fa fa-fw fa-user"></i>Documents</a>
              <a href="/Issues"><i class="fa fa-fw fa-user"></i>Issues</a>
              <a href="/ADTstatus"><i class="fa fa-fw fa-user"></i>ADT Status</a>
              <a href="/Ventilation"><i class="fa fa-fw fa-user"></i>Ventilation</a>
              <a href="/Plan"><i class="fa fa-fw fa-user"></i>Today's Plan</a>
          </div>
          <div class='w3-padding  main' style={{backgroundColor:'#edede9'}}>
              <div >
                <Outlet />
              </div>
              <script src="src/chatbot/static/js/main.83afd028.js" crossOrigin></script>
    <script src="src/chatbot/static/js/787.5e371921.chunk.js"></script>
    <script src="src/chatbot/static/css/main.a42dc6e8.css"></script>
          </div>
          
       
    </div>
    </div>
  );
}

export default Layout;