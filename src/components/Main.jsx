import React from 'react';
import styled from 'styled-components';
import LocationPicker from './LocationPicker';
import ActivitySelector from './ActivitySelector';
import LocationList from './LocationList';
function Main(props) {
    return (
        <MainDiv>
           
<LocationPicker />
<ActivitySelector />
<LocationList />
        </MainDiv>
    );
}

export default Main;

const MainDiv = styled.div`
background-color:white;
border: .1px solid darkgrey;
padding:40px
`