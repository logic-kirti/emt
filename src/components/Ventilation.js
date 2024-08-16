import React from 'react';
import '../App.css';


function Ventilation() {
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
                <label for="mode">Mode</label>               
                <select id="mode" name="mode" class="w3-input w3-border w3-round " >
                    <option value="">SELECT</option>
                    <option value="ROOM AIR">ROOM SIR</option>
                    <option value="MASK">MASK</option>
                    <option value="SIMV">SIMV</option>
                    <option value="PSV">PSV</option>
                    <option value="T PIECE">T PIECE</option>
                    <option value="CPAP">CPAP</option>
                    <option value="ACBC">ACBC</option>
                    <option value="SPONT">SPONT</option>
                </select>
            </div>  
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label for="trach">Tracheostomy</label>  
                <select id="trach" name="trach" class="w3-input w3-border w3-round " >
                    <option value="NO">NO</option>
                    <option value="YES">YES</option>
                </select> 
            </div>  
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label for="intu">Intubated</label>  
                <select id="intu" name="intu" class="w3-input w3-border w3-round " >
                    <option value="NO">NO</option>
                    <option value="YES">YES</option>
                </select> 
            </div>  
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label for="seda">Sedation</label>  
                <select id="seda" name="seda" class="w3-input w3-border w3-round " >
                    <option value="NO">NO</option>
                    <option value="YES">YES</option>
                </select> 
            </div> 
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label >FIO2</label>
                <input class="w3-input w3-border w3-round " type="number"></input>
            </div>
            <div class="w3-col s12 m6 l6 w3-padding-small ">
                <label >Pressure Support</label>
                <input class="w3-input w3-border w3-round " type='number' ></input>
            </div>      

        </div>
        
        <div class="w3-row w3-margin-bottom">
            <div class="w3-col s12 m12 l12 w3-padding-small w3-center w3-margin-top">
                <button class="w3-btn w3-border w3-round-xxlarge w3-black">Save</button>
            </div>
        </div>


        </div>
        <div class="w3-bar w3-margin-top">    
            <a href="/ADTstatus" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-left">&lt;Previous</a>   
            <a href="/Plan" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-right">Next&gt;</a>           
        </div>
    </div>
    );
}

export default Ventilation;