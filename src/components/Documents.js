import React from 'react';
import '../App.css';


function Documents() {
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
            <div class="w3-col s12 m12 l12 w3-padding-small ">                
                <label for="doc">Document Type</label>            
                <select id="doc" name="doc" class="w3-select w3-border w3-round">
                    <option value="">Select</option>
                    <option value="TREATMENT SHEET">TREATMENT SHEET</option>
                    <option value="PATIENT MONITOR SCREEN">PATIENT MONITOR SCREEN</option>
                    <option value="VENTILATOR SCREEN">VENTILATOR SCREEN</option>
                    <option value="DISCHARGE SUMMARY">DISCHARGE SUMMARY</option>
                    <option value="NURSING CHART">NURSING FRONT SHEET</option>
                    <option value="LAB REPORT">LAB REPORT</option>
                    <option value="CT HEAD">CT HEAD</option>
                    <option value="CT SPINAL">CT SPINAL</option>
                    <option value="CHEST X-RAY">CHEST X-RAY</option>
                    <option value="MRI">MRI</option>
                    <option value="ABG">ABG</option>
                    <option value="CLINICAL IMAGE">CLINICAL IMAGE</option>
                    <option value="OPD CARD">OPD CARD</option>
                    <option value="OTHER DOCUMENT">OTHER DOCUMENT</option>                    
                </select>  
            </div>      
            <div class="w3-col s12 m12 l12 w3-padding-small ">     
                <label>Attach Document</label>
                <input type="file" id="myFile" class="w3-input w3-border w3-round" name="filename"/>
            </div>     
        </div>
        <div class="w3-row w3-margin-bottom">
            <div class="w3-col s12 m12 l12 w3-padding-small w3-center w3-margin-top">
                <button class="w3-btn w3-border w3-round-xxlarge w3-black">Upload</button>
            </div>
        </div>


        </div>
        <div class="w3-bar w3-margin-top">    
            <a href="/LastIO" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-left">&lt;Previous</a>   
            <a href="/Issues" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-right">Next&gt;</a>           
        </div>
    </div>
    );
}

export default Documents;