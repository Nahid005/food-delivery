import React, {createContext, useReducer, useContext} from 'react'

export const contextCreate = createContext();
export const StateProvider = ({initialState, reducer, children}) => (
    <contextCreate.Provider value={useReducer(initialState, reducer)}>
        {children}
    </contextCreate.Provider>
)

export const useStateValue = () => useContext(contextCreate)