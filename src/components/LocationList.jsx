import React, { useContext } from 'react';
import Location from './Location';

import { MainContext } from '../App';


function LocationList(props) {
    const {state,dispatch} = useContext(MainContext)
    const {locations,activeSelectors} = state
    return (
        <div>
      <h2>Showing {activeSelectors[0]} </h2>
            {locations.map((l)=> {
                if(activeSelectors.length==0){
                    return <Location l={l}/>
                }
                else if(activeSelectors.length!=0) {
                    if(activeSelectors.includes(l.type))
                        return <Location l={l}/>
                     
                }
               
            })}
        </div>
    );
}

export default LocationList;