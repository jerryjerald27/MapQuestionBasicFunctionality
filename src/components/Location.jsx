import React from 'react';
import styled from 'styled-components';
import LocationLogo from './LocationLogo';
import DisplayTags from './DisplayTags';
import b17 from '../../src/img/17.PNG'
import b3 from '../../src/img/3.PNG'

function Location(props) {
    return (
        <LocationDiv>
            {props.l.type == "busstop" ?

                <React.Fragment>
                    <div style={{ flex: 1 }}>
                        <LocationLogo type={props.l.type} />
                    </div>
                    <div style={{ flex: 1 }} className={"busImgDiv"}>
                        {(props.l.img == "b17") ? <img className={"busImg"} src={b17} alt="" /> : null}
                        {(props.l.img == "b3") ? <img className={"busImg"} src={b3} alt="" /> : null}
                    </div>
                    <div style={{ flex: 6 }} className={"detailsDiv"}>
                        <p className={"locationTitle"}>{props.l.name} </p>
                        <p className={"locationAddress"}>{props.l.address}</p>
                        {(props.l.tags) ? <DisplayTags tags={props.l.tags} /> : null}
                    </div>
                </React.Fragment> :
                <React.Fragment>
                    <div style={{ flex: 1 }}>
                        <LocationLogo type={props.l.type} />
                    </div>
                    <div style={{ flex: 6 }} className={"detailsDiv"}>
                        <p className={"locationTitle"}>{props.l.name} </p>
                        <p className={"locationAddress"}>{props.l.address}</p>
                        {(props.l.tags) ? <DisplayTags tags={props.l.tags} /> : null}
                    </div>
                </React.Fragment>
            }




        </LocationDiv>
    );
}

export default Location;


const LocationDiv = styled.div`


/* border: 1px solid lightgrey; */

display: flex;
.locationTitle {
    text-align: left;
    font-size: 16px;
    margin-top: 0px;
    font-weight: 500;
}
.locationAddress {
    text-align: left ;
    font-size: 10px;
}
.detailsDiv{
    border-bottom: 1px solid gainsboro;
    padding-bottom : 15px;
    padding-top:15px;
    margin-right: 30px;
}
.busImgDiv{
    border-bottom: 1px solid gainsboro;
    padding-bottom : 15px;
    padding-top:15px;
   
}
.busImg{
    width:30px;
}
`