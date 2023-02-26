import React, { useReducer, useState } from 'react'

const initialValues=0

const counter =(state ,action)=>{
    switch (action){

        case "+":
            return state +1
            case "-": 
                return state-1
                default:
                 alert("unvalid action");
    }
}
const Reducer = ( ) => {
    const [count ,dispatch]=useReducer(counter ,initialValues)
  return ( 
     <>
 
    <button onClick={()=>{ dispatch ("+")}}>+</button>
    <span>{count}</span>
    <button onClick={()=>{ dispatch ("-")}}>-</button>
     </>
  )
}

export default Reducer