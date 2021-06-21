import React from 'react';
import styled from 'styled-components';

function LocationPicker(props) {
    return (
        <LocationPickerDiv>

            <div style={{ flex:1, display:"flex" , alignItems: "center" ,justifyContent: "center"}}>
            <button  style={{border: "none" , background:"none"}} ><i class="fas fa-long-arrow-alt-left"></i></button>
            </div>
            <div style={{ flex:4}}>

            <div style={{display:"flex"}}>
                <div style={{flex:1}}><i class="fas fa-compass"></i></div>
                <LocationInput style={{flex:7}} type="from" placeholder="Current Location" />
            </div>
            <div style={{display:"flex"}}>
                <div style={{flex:1}}><i class="fas fa-map-marker-alt"></i></div>
                <LocationInput style={{flex:7}} type="destination" placeholder="Choose Destination" /> 
            </div>
               
            <div style={{display:"flex"}}>
                <button style={{flex:1, border: "none" , background:"none"}}><i class="fas fa-plus-circle"></i></button> 
                <div style={{flex:7}}>Add Desitination</div>
            </div>
            <div style={{display:"flex"}}>
                <div style={{flex:1}}><i class="fas fa-location-arrow"></i></div>
                <div style={{flex:7}}>Use your current Location</div>
            </div>
            </div>
            <div style={{ flex:1 ,display:"flex" , alignItems: "center" ,justifyContent: "center"}}>
              <button  style={{border: "none" , background:"none"}}> <i class="fas fa-exchange-alt fa-rotate-90"></i></button>
            </div>
        </LocationPickerDiv>
    );
}

export default LocationPicker;


const LocationInput = styled.input`
border-radius: 5px;
padding:5px 10px;
margin: 5px 10px;

`

const LocationPickerDiv = styled.div`
border: 1px solid black;
display: flex;
`