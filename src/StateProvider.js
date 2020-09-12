import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); // a data layer such that we can push information to and pull from this stateContext

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/*reducer listens to any action that happens to this data layer */}
    {/*initial state is what the data layer looks initially*/}
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); //how to pull or access information from the data layer

//in this particular app we are using this context API to access the 'user info' (that we get from the database) from any component in the project
