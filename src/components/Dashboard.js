import React from 'react';
import '../App.css';
import muscle1 from '../assets/dashboard/muscle1.png';


function BloodTrans() {
  return (
    <div  style={{ backgroundColor:'#deded6'}}>
        <header> 
          <div class="w3-bar   w3-top" style={{height:40+'px', backgroundColor:'#f3ff47'}}>
              <div class="w3-bar-item w3-text-black w3-hover-text-grey"><a style={{textDecoration:'none'}} href="/">Home</a></div>
              <div class="w3-bar-item w3-text-black w3-hover-text-grey"><a style={{textDecoration:'none'}} href="/About">About</a></div>
              <div class="w3-bar-item w3-text-black w3-hover-text-grey"><a style={{textDecoration:'none'}} href="/Register">Register Patient</a></div>
              <div class="w3-bar-item w3-text-black w3-hover-text-grey"><a style={{textDecoration:'none'}} href="/Dashboard">View Dashboard</a></div>              
              <div class="w3-bar-item w3-text-black w3-hover-text-grey w3-right"><i class="fa fa-user-circle-o" style={{fontSize:28+'px'}}></i>&nbsp;</div>
          </div>
      </header>
      <div class="w3-container w3-padding">
           
       
        
        <div class="w3-row">
            <div class="w3-col w3-hide-small w3-hide-medium l4 w3-padding-small">
                <img src={muscle1} alt="" style={{width:100+'%', marginTop:50+'px'}}></img>
                
            </div>
            <div class="w3-col s12 m12 l8 ">
                <div class="w3-row w3-margin-bottom" style={{marginTop:50+'px'}}>
                    <div class="w3-col s12 m6 l5">
                        
                        <input style={{height:40+'px'}} placeholder="Enter UHID" class="w3-input w3-padding w3-border w3-round-xxlarge" type='text'></input>
                    </div>
                    <div class="w3-col s12 m6 l5">
                        <button style={{marginTop:0+'px', height:40+'px'}} class="w3-btn w3-border w3-round-xxlarge w3-black">Search</button>                
                    </div>
                </div>
                <div class=' w3-panel w3-round-xxlarge' style={{ height:'contain', backgroundColor:'#edede9'}}>
                    <div class="w3-row w3-margin-top w3-margin-bottom">
                        <div class="w3-col s12 m6 l5 w3-padding-small">
                            <div class="w3-round-xxlarge w3-panel " style={{backgroundColor:'#f5f5f3'}}>
                                <label >UHID: </label>
                                <label>104888037</label> 
                            </div>
                                                       
                        </div>                
                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>
    );
}

export default BloodTrans;