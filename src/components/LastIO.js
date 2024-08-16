import React from 'react';
import '../App.css';


function LastIO() {
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
            <div class="w3-col s12 m6 l5 w3-padding-small ">
                <label >Date</label>
                <input class="w3-input w3-border w3-round " type='date'></input>
            </div>
            <div class="w3-col s12 m6 l5 w3-padding-small ">
                <label >Time</label>
                <input class="w3-input w3-border w3-round " type='time'></input>
            </div>
        </div>
        <div class="w3-row">
            <div class="w3-col s12 m6 l4 w3-padding-small "> 
                <label>Input (ml)</label>               
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div> 
            <div class="w3-col s12 m6 l4 w3-padding-small "> 
                <label>Output (ml)</label>               
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div> 
            <div class="w3-col s12 m6 l4 w3-padding-small "> 
                <label>Drain (ml)</label>               
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>    
            <div class="w3-col s12 m12 l12 w3-padding-small "> 
                <label>Comment</label>               
                <textarea class="w3-input w3-border w3-round" type='text'></textarea>
            </div>        
        </div>
        <div class="w3-row w3-margin-bottom">
            <div class="w3-col s12 m12 l12 w3-padding-small w3-center w3-margin-top">
                <button class="w3-btn w3-border w3-round-xxlarge w3-black">Save</button>
            </div>
        </div>


        </div>
        <div class="w3-bar w3-margin-top">    
            <a href="/Infusions" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-left">&lt;Previous</a>   
            <a href="/Documents" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-right">Next&gt;</a>           
        </div>
    </div>
    );
}

export default LastIO;