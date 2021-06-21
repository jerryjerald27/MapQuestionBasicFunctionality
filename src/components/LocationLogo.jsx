import React from 'react';

function LocationLogo(props) {
    console.log(props.type);
    if(props.type=="busstop")
    return (
        <i class="fas fa-bus"></i>
    ) 
    else if(props.type=="attraction")
    return (
        <i class="fas fa-camera"></i>
    )
    else if(props.type=="park")
    return (
        <i class="fas fa-map-marker-alt"></i>
    )
    else if(props.type=="museum")
    return (
        <i class="fas fa-map-marker-alt"></i>
    )
    else return <i class="fas fa-map-marker-alt"></i>
}

export default LocationLogo; 