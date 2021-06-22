import React from 'react';
import styled from 'styled-components';
import backArrow from '../img/Arrow.svg'


function LocationPicker(props) {
    return (


        <LocationPickerDiv>

            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <div style={{paddingTop:"10px"}}>
                   
                    <img src={backArrow} alt="" />
                </div>
            </div>
            <div style={{ flex: 8 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ flex: 1 }}><i class="fas fa-compass"></i></div>
                    <LocationInput style={{ flex: 7 }} className="mainInput" type="from" placeholder="Current Location" />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ flex: 1 }}><i class="fas fa-map-marker-alt"></i></div>
                    <LocationInput style={{ flex: 7, color:"#BFBFBF" }} className="secondInput" type="destination" placeholder="Choose Destination" />
                </div>
                <div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                    <div style={{ flex: 1, border: "none", background: "none" }}><i class="fas fa-plus-circle"></i></div>
                    <div style={{ flex: 7, textAlign: "left", marginLeft: "20px" }} className={"addDestination"}>Add Destination</div>
                </div>
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: "28px", marginLeft:"0px"  }}>
                <div >
                    <button style={{ border: "none", background: "none" }}> <i class="fas fa-exchange-alt fa-rotate-90"></i></button>
                </div>
            </div>

        </LocationPickerDiv>


    );
}

export default LocationPicker;


const LocationInput = styled.input`
border-radius: 5px;
padding:8px 13.51px;
margin: 5px 10px;
border: 1px solid #BFBFBF;
font-size: 15px;
color:red;


`

const LocationPickerDiv = styled.div`

display: flex;
flex:1;
.addDestination {
    font-size:12.5px;
}
.mainInput::placeholder{
color:#484848;
}
.secondInput::placeholder{
color:#BFBFBF;
}
`