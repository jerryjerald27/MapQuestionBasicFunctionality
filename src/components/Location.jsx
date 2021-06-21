import React from 'react';
import styled from 'styled-components';
import LocationLogo from './LocationLogo';
function Location(props) {
    return (
        <LocationDiv>
            
        <LocationLogo type={props.l.type}/>
           
            
            {props.l.name} 

        </LocationDiv>
    );
}

export default Location;


const LocationDiv = styled.div`
border: 1px solid lightgrey;
padding : 45px 20px`