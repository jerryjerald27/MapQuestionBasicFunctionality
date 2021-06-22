import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../App';

const handleSelect = (e, type, state, dispatch) => {
    console.log(`State ${state} Type ${type}`);
    console.log(e.target.classList);


    if (e.target.classList.contains("active")) {
        dispatch({
            type: "deselect",
            payload: type
        });
    }
    else if (!e.target.classList.contains("active")) {
        dispatch({
            type: "select",
            payload: type
        });
    }
    e.target.classList.toggle("active");



};



function ActivitySelector(props) {
    const { state, dispatch } = useContext(MainContext)
    return (
        <SelectorDiv>
            <button className="viewlink" onClick={(e) => handleSelect(e, "busstop", state, dispatch)}>Bus stops</button>
            <button className="viewlink" onClick={(e) => handleSelect(e, "attraction", state, dispatch)}>Attractions</button>
            <button className="viewlink" onClick={(e) => handleSelect(e, "park", state, dispatch)}>Parks</button>
            <button className="viewlink" onClick={(e) => handleSelect(e, "museum", state, dispatch)}>Museums</button>
        </SelectorDiv>
    );
}

export default ActivitySelector;


const SelectorDiv = styled.div`
button {

border-radius: 15px;
padding: 5px 15px;
border: 0px;
margin-top: 16px ;
margin-bottom: 16px;
margin-left: calc(.5px + .5vw);
margin-right: calc(.5px + .5vw);
background-color: #ececec;
font-size:12.5px;
font-weight: regular;
color:#5A5A5A

}

.active {
    background-color: #727272;
    color:white;
}
`
