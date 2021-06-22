import React from 'react';
import styled from 'styled-components';

function LocationPicker(props) {
    return (


        <LocationPickerDiv>

            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <div>
                    <button style={{ border: "none", background: "none", paddingTop: "0px" }} ><i class="fas fa-long-arrow-alt-left" style={{ paddingTop: "0px" }}></i></button>
                </div>
            </div>
            <div style={{ flex: 4 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ flex: 1 }}><i class="fas fa-compass"></i></div>
                    <LocationInput style={{ flex: 7 }} type="from" placeholder="Current Location" />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ flex: 1 }}><i class="fas fa-map-marker-alt"></i></div>
                    <LocationInput style={{ flex: 7 }} type="destination" placeholder="Choose Destination" />
                </div>
                <div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                    <div style={{ flex: 1, border: "none", background: "none" }}><i class="fas fa-plus-circle"></i></div>
                    <div style={{ flex: 7, textAlign: "left", marginLeft: "20px" }} className={"addDestination"}>Add Destination</div>
                </div>
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: "20px" }}>
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
padding:5px 10px;
margin: 5px 10px;
border: 1px solid black;
font-size: 10px;


`

const LocationPickerDiv = styled.div`

display: flex;
flex:1;
.addDestination {
    font-size:10px

}
`