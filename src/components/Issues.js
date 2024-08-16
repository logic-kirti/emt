import React from 'react';
import '../App.css';


function Issues() {
  return (
    <div class="w3-container w3-padding">
        <div class=' w3-panel w3-round-large' style={{minHeight:80+'vh', height:'contain', backgroundColor:'#f5f5f3'}}>
         
        <div class="w3-row w3-margin-top">
            <div class="w3-col s12 m6 l5 w3-padding-small w3-left">
                <label >UHID</label>
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>
        </div>
        
        <div class="w3-row">
            <div class="w3-col s12 m6 l4 w3-padding-small "> 
                <label>Issue</label>               
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>           
            <div class="w3-col s12 m6 l4 w3-padding-small "> 
                <label>Since Date</label>               
                <input class="w3-input w3-border w3-round " type='date'></input>
            </div>   
            <div class="w3-col s12 m6 l4 w3-padding-small "> 
                <label>Till Date</label>               
                <input class="w3-input w3-border w3-round " type='date'></input>
            </div>   
        </div>
        <div class="w3-roww3-margin-bottom">
            <div class="w3-col s12 m12 l12 w3-padding-small w3-center w3-margin-top">
                <button class="w3-btn w3-border w3-round-xxlarge w3-black">Save</button>
            </div>
        </div>


        </div>
        <div class="w3-bar w3-margin-top">    
            <a href="/Documents" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-left">&lt;Previous</a>   
            <a href="/ADTstatus" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-right">Next&gt;</a>           
        </div>
    </div>
    );
}

export default Issues;