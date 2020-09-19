
import React,{useState,createContext } from'react'

export const RickContext =createContext();
export const RickContextProvider=(props)=>{
    const [api,setApi]=useState([]);
    return(
    <RickContext.Provider value={[api,setApi]}>{props.children}</RickContext.Provider>
    )
}
