import React from 'react';
import '../App.css';


function BloodTrans() {
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
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label >Date</label>
                <input class="w3-input w3-border w3-round " type='date'></input>
            </div>
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label >Time</label>
                <input class="w3-input w3-border w3-round " type='time'></input>
            </div>
        </div>
        <div class="w3-row">
            <div class="w3-col s12 m6 l6 w3-padding-small ">                
                <label for="bld">Blood Tranfusion</label>            
                <select id="bld" name="bld" class="w3-select w3-border w3-round">
                    <option value="">Select</option>
                    <option value="RED BLOOD CELLS">RED BLOOD CELLS</option>
                    <option value="WHOLE BLOOD">WHOLE BLOOD</option>
                    <option value="FRESH FROZEN PLAZMA">FRESH FROZEN PLAZMA</option>
                    <option value="HEPRARIN WHOLE BLOOD">HEPRARIN WHOLE BLOOD</option>
                    <option value="LIQUID PLAZMA">LIQUID PLAZMA</option>
                    <option value="PLATELETS">PLATELETS</option>
                    <option value="POOLED PLATELETS">POOLED PLATELETS</option>
                    <option value="RH IMMUNE GLOBILIS">RH IMMUNE GLOBILIS</option>
                    <option value="ALBUMIN 5%">ALBUMIN 5%</option>
                    <option value="CRYPRECIPITATE">CRYOPRECIPITATE</option>
                </select>  
            </div> 
            <div class="w3-col s12 m6 l3 w3-padding-small ">
                <label>Quantity</label>
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>   
            <div class="w3-col s12 m6 l3 w3-padding-small ">
                <label>Bloog Bag No.</label>
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>          
        </div>
        <div class="w3-row">
            <div class="w3-col s12 m6 l4 w3-padding-small ">  
                <label>Date of Start</label>
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>
            <div class="w3-col s12 m6 l4 w3-padding-small "> 
                <label for="react">Any Reaction?</label>            
                <select id="react" name="react" class="w3-select w3-border w3-round">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>                    
                </select>  
            </div>
            <div class="w3-col s12 m6 l4 w3-padding-small ">  
                <label for="comp">Completed</label>            
                <select id="comp" name="comp" class="w3-select w3-border w3-round">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>                    
                </select>  
            </div>
        </div>
        <div class="w3-row w3-margin-bottom">
            <div class="w3-col s12 m12 l12 w3-padding-small w3-center w3-margin-top">
                <button class="w3-btn w3-border w3-round-xxlarge w3-black">Save</button>
            </div>
        </div>


        </div>
        <div class="w3-bar w3-margin-top">    
            <a href="/Surgery" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-left">&lt;Previous</a>   
            <a href="/Infusions" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-right">Next&gt;</a>           
        </div>
    </div>
    );
}

export default BloodTrans;