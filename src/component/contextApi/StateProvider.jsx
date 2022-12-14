import React, {createContext, useReducer, useContext} from 'react'

export const contextCreate = createContext();
export const StateProvider = ({initialState, reducer, children}) => (
    <contextCreate.Provider value={useReducer(reducer, initialState)}>
        {children}
    </contextCreate.Provider>
)

export const useStateValue = () => useContext(contextCreate)

