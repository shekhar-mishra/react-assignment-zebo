import React ,{createContext,useReducer} from 'react'
import imageReducer from '../reducer/index.js'
const initialState ={}
export const Context= createContext(initialState)
export const Store =({children})=>{
    console.log("children==",children)
    const [state, dispatch] = useReducer(imageReducer)
    return (
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}