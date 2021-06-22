import React from 'react';
import busStopImg from '../img/bus.svg'
import attraction from '../img/attraction.svg'
import mapMarker from '../img/map.svg'
import styled from 'styled-components';

function LocationLogo(props) {
    console.log(props.type);
    if(props.type=="busstop")
    return (
       <img style={{width:"19px"}}  className={"icon"} src={busStopImg} alt="" />
    ) 
    else if(props.type=="attraction")
    return (
        <img style={{width:"24.22px"}} className={"icon"} src={attraction} alt="" />
    )
    else if(props.type=="park")
    return (
        <img style={{width:"15.32"}} className={"icon"} src={mapMarker} alt="" />
    )
    else if(props.type=="museum")
    return (
        <img style={{width:"15.32"}} className={"icon"} src={mapMarker} alt="" />
    )
    else return <i class="fas fa-map-marker-alt"></i>
}

export default LocationLogo; 


