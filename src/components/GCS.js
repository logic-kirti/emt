import React from 'react';
import '../App.css';


function GCS() {
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
            <label>GCS</label>  
            <br/>
                    <label>E:</label> 
                   <div class="w3-row  w3-margin-top radio-toolbar">                                             
                       <input type="radio" value="1"></input>
                       <label>1</label>
                       <input type="radio"  value="2"></input>
                       <label>2</label>
                       <input type="radio"  value="3"></input>
                       <label>3</label>
                       <input type="radio"  value="4"></input>    
                       <label>4</label>                   
                   </div>
                   <div class="w3-row w3-margin-top">
                       <div class="w3-col l2"><input type="checkbox" class="w3-check w3-margin-bottom" />
                       <label>ET:</label></div> 
                  
                       <div class="w3-col l2"><input type="checkbox" class="w3-check w3-margin-bottom"  />
                       <label>T:</label></div>
                    
                       <div class="w3-col l2"><input type="checkbox" class="w3-check w3-margin-bottom"  />
                       <label>CRY:</label></div>
                   
                       <div class="w3-col l2"><input type="checkbox" class="w3-check w3-margin-bottom"  />
                       <label>SPONT:</label></div>
                   </div>
                   <div class="w3-row  w3-margin-top">
                       <label>V:</label>
                       <div class="w3-row  w3-margin-top radio-toolbar">                                             
                            <input type="radio" value="1"></input>
                            <label>1</label>
                            <input type="radio"  value="2"></input>
                            <label>2</label>
                            <input type="radio"  value="3"></input>
                            <label>3</label>
                            <input type="radio"  value="4"></input>    
                            <label>4</label>
                            <input type="radio"  value="5"></input>    
                            <label>5</label>                   
                        </div>
                   </div>
                   
                   <div class="w3-row  w3-margin-top">
                       <label>M:</label>
                       <div class="w3-row  w3-margin-top radio-toolbar">                                             
                            <input type="radio" value="1"></input>
                            <label>1</label>
                            <input type="radio"  value="2"></input>
                            <label>2</label>
                            <input type="radio"  value="3"></input>
                            <label>3</label>
                            <input type="radio"  value="4"></input>    
                            <label>4</label>
                            <input type="radio"  value="5"></input>    
                            <label>5</label> 
                            <input type="radio"  value="6"></input>    
                            <label>6</label>                   
                        </div>
                   </div>
                   <div class="w3-row w3-margin-top">
                       <div >Total: <label>--</label></div>
                   </div>


            </div>           
        </div>


        <div class="w3-row w3-margin-bottom">
            <div class="w3-col s12 m12 l12 w3-padding-small w3-center w3-margin-top">
                <button class="w3-btn w3-border w3-round-xxlarge w3-black">Save</button>
            </div>
        </div>

        </div>

        <div class="w3-bar w3-margin-top">    
            <a href="/Register" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-left">&lt;Previous</a>   
            <a href="/Vital" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-right">Next&gt;</a>           
        </div>
    </div>
    );
}

export default GCS;