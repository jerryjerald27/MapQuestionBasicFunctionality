import React, { useContext } from 'react';
import Location from './Location';

import { MainContext } from '../App';


function LocationList(props) {
    const { state, dispatch } = useContext(MainContext)
    const { selectedLocations, activeSelectors } = state

    return (
        <div>

            {selectedLocations.slice(0, 5).map((l) => {

                return <Location l={l} />




            })}
        </div>
    );
}

export default LocationList;


// {newLocations.map((l) => {
//     if (activeSelectors.length == 0) {
//         return <Location l={l} />
//     }
//     else if (activeSelectors.length != 0) {
//         if (activeSelectors.includes(l.type))
//             return <Location l={l} />

//     }

// })}