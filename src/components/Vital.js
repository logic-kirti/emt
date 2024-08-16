import React from 'react';
import '../App.css';


function Vital() {
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
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label >RR (bpm)</label>
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label >SPO2 (mmHg)</label>
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label >Pulse Rate (bpm)</label>
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label >Temperature (Fahrenheit)</label>
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label >Blood Pressure (mmHg)</label>
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label >ICP (mmHg)</label>
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>            
        </div>
        <div class="w3-row">
            <div class="w3-col s12 m6 l6 w3-padding-small w3-container">
                <label for="gender">Left Pupil</label>
                <div class="w3-border w3-padding-small w3-white w3-border-grey w3-round" style={{height:150+'px', overflowY:'scroll'}}>
                    <p class="w3-light-grey">
                    <input class="w3-radio radio_style" name="left" type='radio' value="nsrl"></input>
                    <label>NSRL</label></p>
                    <p class=" ">
                    <input class="w3-radio radio_style"  name="left" type='radio'></input>
                    <label>NSNR</label></p>
                    <p class="w3-light-grey ">
                    <input class="w3-radio radio_style" name="left" type='radio'></input>
                    <label>NSSRL</label></p>
                    <p >
                    <input class="w3-radio radio_style" name="left" type='radio'></input>
                    <label>MDRL</label></p>
                    <p class="w3-light-grey ">
                    <input class="w3-radio radio_style" name="left" type='radio'></input>
                    <label>MDNRL</label></p>
                    <p>
                    <input class="w3-radio radio_style" name="left" type='radio'></input>
                    <label>NSNRL</label></p>
                    <p class="w3-light-grey ">
                    <input class="w3-radio radio_style" name="left" type='radio'></input>
                    <label>DILATED SR</label></p>
                    <p >
                    <input class="w3-radio radio_style" name="left" type='radio'></input>
                    <label>DILATED NR</label></p>
                    <p class="w3-light-grey ">
                    <input class="w3-radio radio_style" name="left" type='radio'></input>
                    <label>DILATED FIXED</label></p>
                    <p >
                    <input class="w3-radio radio_style" name="left" type='radio'></input>
                    <label>CONSTRICTED</label></p>
                    <p class="w3-light-grey ">
                    <input class="w3-radio radio_style" name="left" type='radio'></input>
                    <label>NOT ACCESSIBLE</label></p>
                    
                </div>
            </div> 
            <div class="w3-col s12 m6 l6 w3-padding-small w3-container">
                <label for="gender">Right Pupil</label>
                <div class="w3-border w3-padding-small w3-white w3-border-grey w3-round" style={{height:150+'px', overflowY:'scroll'}}>
                    <p class="w3-light-grey">
                    <input class="w3-radio radio_style" name="right" type='radio' value="nsrl"></input>
                    <label>NSRL</label></p>
                    <p class=" ">
                    <input class="w3-radio radio_style"  name="right" type='radio'></input>
                    <label>NSNR</label></p>
                    <p class="w3-light-grey ">
                    <input class="w3-radio radio_style" name="right" type='radio'></input>
                    <label>NSSRL</label></p>
                    <p >
                    <input class="w3-radio radio_style" name="right" type='radio'></input>
                    <label>MDRL</label></p>
                    <p class="w3-light-grey ">
                    <input class="w3-radio radio_style" name="right" type='radio'></input>
                    <label>MDNRL</label></p>
                    <p>
                    <input class="w3-radio radio_style" name="right" type='radio'></input>
                    <label>NSNRL</label></p>
                    <p class="w3-light-grey ">
                    <input class="w3-radio radio_style" name="right" type='radio'></input>
                    <label>DILATED SR</label></p>
                    <p >
                    <input class="w3-radio radio_style" name="right" type='radio'></input>
                    <label>DILATED NR</label></p>
                    <p class="w3-light-grey ">
                    <input class="w3-radio radio_style" name="right" type='radio'></input>
                    <label>DILATED FIXED</label></p>
                    <p >
                    <input class="w3-radio radio_style" name="right" type='radio'></input>
                    <label>CONSTRICTED</label></p>
                    <p class="w3-light-grey ">
                    <input class="w3-radio radio_style" name="right" type='radio'></input>
                    <label>NOT ACCESSIBLE</label></p>
                    
                </div>
            </div> 


            <div>
           
            </div>
        </div>
        <div class="w3-row w3-margin-bottom">
            <div class="w3-col s12 m12 l12 w3-padding-small w3-center w3-margin-top">
                <button class="w3-btn w3-border w3-round-xxlarge w3-black">Save</button>
            </div>
        </div>


        </div>
        <div class="w3-bar w3-margin-top">    
            <a href="/GCS" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-left">&lt;Previous</a>   
            <a href="/FeverPack" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-right">Next&gt;</a>           
        </div>
    </div>
  )
}

export default Vital;