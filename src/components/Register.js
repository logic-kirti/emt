import React from 'react';
import '../App.css';


function Register() {


  return (
    <div class="w3-container w3-padding">
        <div class=' w3-panel w3-round-large' style={{minHeight:80+'vh', height:'contain', backgroundColor:'#f5f5f3'}}>
            <div class="w3-row w3-margin-top">
                <div class="w3-col s12 m6 l5 w3-padding-small">
                    <label >UHID</label>
                    <input class="w3-input w3-border w3-round " type='text'></input>
                </div>
            </div>
            <div class="w3-row">            
                <div class="w3-col s12 m6 l6 w3-padding-small">
                    <label >First Name</label>
                    <input class="w3-input w3-border w3-round" type='text'></input>
                </div>
                <div class="w3-col s12 m6 l6 w3-padding-small">
                    <label >Last Name</label>
                    <input class="w3-input w3-border w3-round" type='text'></input>
                </div>
                <div class="w3-col s12 m6 l4 w3-padding-small">
                    <label for="gender">Gender</label>
                    <select id="gender" name="gender" class="w3-select w3-border w3-round">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    </select>
                </div>            
                <div class="w3-col s12 m6 l4 w3-padding-small">
                    <label >DOB</label>
                    <input type="date" class="w3-input w3-border w3-round" ></input>
                </div>
                <div class="w3-col s12 m6 l4 w3-padding-small">
                    <label >Age</label>
                    <input class="w3-input w3-border w3-round" type='text'></input>
                </div>  
            </div>
            <hr/>
            <div class="w3-row">
                <div class="w3-col s12 m6 l4 w3-padding-small">
                    <label >Date of Admission</label>
                    <input class="w3-input w3-border w3-round" type='date'></input>
                </div> 
                <div class="w3-col s12 m6 l4 w3-padding-small">
                    <label >Blood Group</label>
                    <input class="w3-input w3-border w3-round" type='text'></input>
                </div> 
                <div class="w3-col s12 m6 l4 w3-padding-small">
                    <label >Blood Donated</label>
                    <input class="w3-input w3-border w3-round" type='text'></input>
                </div>              
            </div>
            <hr/>
            <div class="w3-row">
                <div class="w3-col s12 m12 l12 w3-padding-small">
                    <label >Consultant</label>
                    <input class="w3-input w3-border w3-round" type='text'></input>
                </div> 
            </div>
            <hr/>
            <div class="w3-row">
                <div class="w3-col s12 m6 l7 w3-padding-small">
                    <label >Ward</label>
                    <input class="w3-input w3-border w3-round" type='text'></input>
                </div> 
                <div class="w3-col s12 m6 l5 w3-padding-small">
                    <label >Bed</label>
                    <input class="w3-input w3-border w3-round" type='text'></input>
                </div>                       
            </div>  
            <hr/>
            <div class="w3-row">
                <div class="w3-col s12 m12 l12 w3-padding-small">
                    <label >Diagnosis</label>
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
            <a href="/GCS" style={{backgroundColor:'#f3ff47'}} class="w3-button w3-round w3-right">Next&gt;</a>           
        </div>
        

    </div>
    
  );
}

export default Register;