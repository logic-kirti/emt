import React from 'react';
import '../App.css';


function Lab() {
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
                <label >Hb</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >Platelets</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >TLC</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>           
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >Urea</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >Creatinine</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >Bilirubin</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >Random Glucose</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >SGOT (AST)</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >SGPT (AST)</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >ALK PHOS</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >Hematocrit (HCT)</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >Sodium</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >Potassium</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >RBC</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >Ca (serum)</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>     
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >D-dimer</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div> 
        </div>
        <hr/>
        <h3 class="w3-padding-small">CSF Results</h3>
        <div class="w3-row">
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >CST Total Protein</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>  
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >Gamma Globulin</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>  
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >CSF Glucose</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>  
            <div class="w3-col s12 m6 l6 w3-padding-small ">        
                <label >CSF WBC Count</label>        
                <input class="w3-input w3-border w3-round " type='text'></input>
            </div>  
        </div>
        <div class="w3-row w3-margin-bottom">
            <div class="w3-col s12 m12 l12 w3-padding-small w3-center w3-margin-top">
                <button class="w3-btn w3-border w3-round-xxlarge w3-black">Save</button>
            </div>
        </div>


        </div>
        <div class="w3-bar w3-margin-top">    
            <a href="/FeverPack" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-left">&lt;Previous</a>   
            <a href="/ABG" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-right">Next&gt;</a>           
        </div>
    </div>
    );
}

export default Lab;