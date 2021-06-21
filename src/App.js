import React , {useReducer} from 'react';
import './App.css';
import Main from './components/Main';
import styled from 'styled-components';


export const MainContext = React.createContext()

const initialState = {
  activeSelectors : [],
  locations: [ 
    {name: "Port Authority" , type: "busstop"},
    {name: "Times square West", type: "busstop"},
    {name: "Times square", type: "attraction"},
    {name: "Times square building", type: "attraction"},
    {name: "Central Park" , type: "park"},
    {name: "Battery Park" , type: "park"},
    {name: "Metropolitan Museum" ,type: "museum"},
    {name: "Brooklyn Museum" ,type: "museum"}
  ]
};


const reducer = (state,action) =>{
  switch(action.type) {
      case 'select' : 
      console.log(`${action.payload} selected`); 
      const newState = {...state,activeSelectors: [...state.activeSelectors,action.payload] };
      console.log(newState.activeSelectors);
      return newState 
      case 'deselect' : 
      console.log(`${action.payload} deselected`); 
      const newActiveSelectors =state.activeSelectors.filter(s=>s!==action.payload);
      return {...state, activeSelectors:newActiveSelectors} 
      default : return state
  }

}


function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <MainContext.Provider value={{state: count, dispatch: dispatch}}>
    <AppDiv className="App">
    <Main /> 
    </AppDiv>
    </MainContext.Provider>
  );
}

export default App;


const AppDiv = styled.div`

background-color: lightgrey;
padding:50px
`