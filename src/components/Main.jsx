import React from 'react';
import styled from 'styled-components';
import LocationPicker from './LocationPicker';
import ActivitySelector from './ActivitySelector';
import LocationList from './LocationList';
function Main(props) {
    return (
        <MainDiv>
           <div className={"selectors"}>
<LocationPicker />
<ActivitySelector />
           </div>
<LocationList />
        </MainDiv>
    );
}

export default Main;

const MainDiv = styled.div`
background-color:white;
border: .1px solid darkgrey;
padding:0px;
.selectors {
    padding-top:20px;
    
    margin-bottom: 20px;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.09);
}
`