import React, { useReducer } from 'react';
import './App.css';
import Main from './components/Main';
import styled from 'styled-components';
import { locationData } from './locationData';

export const MainContext = React.createContext()

const initialState = {
  activeSelectors: [],
  locations: locationData,
  selectedLocations: locationData
};


const reducer = (state, action) => {

  switch (action.type) {
    case 'select':
      console.log(`${action.payload} selected`);
      const S_newActiveSelectors = [...state.activeSelectors, action.payload]
      const S_selectedLocations = state.locations.filter(l => S_newActiveSelectors.includes(l.type))
      const newState = { ...state, activeSelectors: [...state.activeSelectors, action.payload], selectedLocations: S_selectedLocations };
      console.log(newState.activeSelectors);
      return newState
    case 'deselect':
      console.log(`${action.payload} deselected`);
      const D_newActiveSelectors = state.activeSelectors.filter(s => s !== action.payload);
      const D_selectedLocations = D_newActiveSelectors.length ? state.locations.filter(l => D_newActiveSelectors.includes(l.type)) : state.locations;
      return { ...state, activeSelectors: D_newActiveSelectors, selectedLocations: D_selectedLocations }
    default: return state
  }

}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <MainContext.Provider value={{ state: count, dispatch: dispatch }}>
      <AppDiv className="App">
        <Main />
      </AppDiv>
    </MainContext.Provider>
  );
}

export default App;


const AppDiv = styled.div`

background-color: lightgrey;
padding:0px
`